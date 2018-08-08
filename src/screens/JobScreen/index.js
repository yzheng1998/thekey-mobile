import React, { Component } from 'react'
import {
  Container,
  TagsContainer,
  BackButtonContainer,
  ButtonHeader,
} from './styles'
import LoadingWrapper from '../../components/LoadingWrapper'
import JobPictureBlock from '../../components/JobPictureBlock'
import AboutBlock from './components/AboutBlock'
import TagLine from '../../components/TagLine'
import SimilarJobsBlock from '../../components/SimilarJobsBlock'
import BackButton from 'react-native-vector-icons/Ionicons'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import JobStarButton from '../../components/JobStarButton'
import ApplyNowModal from './components/ApplyNowModal'

const GET_JOB = gql`
  query job($id: ID!) {
    job(id: $id) {
      id
      title
      company {
        name
        about
      }
      description
      picture
      location
      commitment
      deadline
      tags {
        name
      }
      bringToRole
      industry
      createdAt
      isInterested
      hasApplied
    }
  }
`

class JobScreen extends Component {
  state = {
    showApplyModal: false,
  }
  toggleApplyModal = () => {
    this.setState({ showApplyModal: !this.state.showApplyModal })
  }

  render() {
    const variables = {
      id: this.props.navigation.getParam('id'),
    }
    return (
      <Query query={GET_JOB} variables={variables}>
        {({ loading, data, refetch }) => {
          if (loading) return <LoadingWrapper loading />
          const {
            title,
            company,
            description,
            picture,
            location,
            commitment,
            createdAt,
            tags,
            bringToRole,
            industry,
            isInterested,
            hasApplied,
          } = data.job
          return (
            <Container keyboardShouldPersistTaps="handled">
              <JobPictureBlock
                navigation={this.props.navigation}
                picture={picture}
                title={title}
                company={company.name}
                commitment={commitment}
                location={location}
                time={createdAt}
                toggleApplyModal={this.toggleApplyModal}
                hasApplied={hasApplied}
              />
              <AboutBlock
                navigation={this.props.navigation}
                about={description}
                aboutRole={description}
                aboutCompany={company.about}
                bringToRole={bringToRole}
                industry={industry}
                commitment={commitment}
              />
              <TagsContainer>
                <TagLine tagData={tags} lines={1} />
              </TagsContainer>
              <SimilarJobsBlock navigation={this.props.navigation} />
              <ButtonHeader>
                <BackButtonContainer
                  onPress={() => this.props.navigation.goBack()}
                >
                  <BackButton name="ios-arrow-back" size={27} color="white" />
                </BackButtonContainer>
                <JobStarButton
                  isInterested={isInterested}
                  id={this.props.navigation.getParam('id')}
                />
              </ButtonHeader>
              <ApplyNowModal
                refreshPage={refetch}
                toggleApplyModal={this.toggleApplyModal}
                id={this.props.navigation.getParam('id')}
                isVisible={this.state.showApplyModal}
              />
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default JobScreen
