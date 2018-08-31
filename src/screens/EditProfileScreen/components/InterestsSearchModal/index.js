import React, { Component } from 'react'
import { FlatList, Platform } from 'react-native'
import Modal from 'react-native-modal'
import {
  Background,
  SearchNameContainer,
  PeopleListContainer,
  ThinDivider,
} from './styles'
import TagInput from 'react-native-tag-input'
import InterestCard from './components/InterestCard'
import InterestsModalHeader from './components/InterestsModalHeader'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import LoadingWrapper from '../../../../components/LoadingWrapper'

const SEARCH_TAGS = gql`
  query tags($substr: String!) {
    tags(substr: $substr) {
      id
      name
    }
  }
`

const InterestList = ({ interestData, addInterest }) => (
  <PeopleListContainer>
    <FlatList
      keyboardShouldPersistTaps="handled"
      keyExtractor={interest => interest.id}
      data={interestData}
      renderItem={({ item: interest }) => (
        <InterestCard
          onPress={() => addInterest(`${interest.name}`, interest.id)}
          title={interest.name}
        />
      )}
    />
  </PeopleListContainer>
)

export default class InterestsSearchModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      tags: props.tags,
    }

    this.handleClose = () => {
      this.setState({ text: '' })
      props.closeModal()
    }
  }

  onChangeTagNames = tagNames => {
    this.setState({
      tags: this.state.tags.filter(tag => tagNames.includes(tag.name)),
    })
  }

  onChangeText = text => {
    this.setState({ text: text.trim() })
  }

  addInterest = (name, id) => {
    const tagNames = this.state.tags.map(el => el.name)
    if (!tagNames.includes(name)) {
      this.setState({
        text: '',
        tags: [...this.state.tags, { id, name }],
      })
    }
  }

  labelExtractor = tag => tag

  render() {
    const variables = {
      substr: this.state.text,
    }
    const inputProps = {
      keyboardType: 'default',
      placeholder: 'search',
      autoFocus: true,
      style: {
        fontSize: 14,
        marginVertical: Platform.OS === 'ios' ? 10 : -2,
      },
    }

    const { updateTags, tags, isVisible } = this.props

    const tagNames = this.state.tags.map(el => el.name)

    const handleCancel = () => {
      this.setState({ tags })
      this.handleClose()
    }
    return (
      <Modal
        style={{ margin: 0 }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={isVisible}
      >
        <Background>
          <InterestsModalHeader
            handleClose={this.handleClose}
            handleCancel={handleCancel}
            tags={this.state.tags}
            updateTags={updateTags}
          />
          <ThinDivider />
          <SearchNameContainer>
            <TagInput
              value={tagNames}
              onChange={this.onChangeTagNames}
              labelExtractor={this.labelExtractor}
              text={this.state.text}
              onChangeText={this.onChangeText}
              tagColor=" rgb(220, 60, 53)"
              tagTextColor="white"
              tagTextStyle={{ fontSize: 14 }}
              inputProps={inputProps}
              scrollViewProps={{
                horizontal: true,
                showsHorizontalScrollIndicator: false,
              }}
              inputColor="black"
              maxHeight={80}
              tagContainerStyle={{
                borderRadius: 10,
                margin: 0,
                marginRight: 5,
                padding: 0,
                paddingLeft: 7,
                paddingRight: 7,
              }}
            />
          </SearchNameContainer>
          <ThinDivider />
          <Query query={SEARCH_TAGS} variables={variables}>
            {({ loading, data }) => {
              if (loading) return <LoadingWrapper loading />
              return (
                <InterestList
                  interestData={data.tags}
                  addInterest={this.addInterest}
                />
              )
            }}
          </Query>
        </Background>
      </Modal>
    )
  }
}
