import React, { Component } from 'react'
import {
  Container,
  TagsContainer,
  BackButtonContainer,
  StarContainer,
} from './styles'
import { Text } from 'react-native'
import JobPictureBlock from '../../components/JobPictureBlock'
import AboutBlock from './components/AboutBlock'
import TagLine from '../../components/TagLine'
import SimilarJobsBlock from '../../components/SimilarJobsBlock'
import BackButton from 'react-native-vector-icons/Ionicons'
import Star from 'react-native-vector-icons/Feather'
import StarClicked from 'react-native-vector-icons/FontAwesome'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_JOB = gql`
  query job($id: ID!) {
    job(id: $id) {
      title
      company {
        name
      }
      description
      picture
      location
      commitment
      deadline
      tags {
        name
      }
    }
  }
`

class JobScreen extends Component {
  state = { isInterested: false }

  render() {
    const variables = {
      id: this.props.navigation.getParam('id'),
    }
    return (
      <Query query={GET_JOB} variables={variables}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) {
            return <Text>Error! {error.message}</Text>
          }
          const {
            title,
            company,
            description,
            picture,
            location,
            commitment,
            deadline,
            tags,
          } = data.job
          const source = picture
            ? { uri: picture }
            : {
                uri:
                  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74be18f074e19e06a51221f0f09969df&auto=format&fit=crop&w=1504&q=80',
              }
          return (
            <Container>
              <JobPictureBlock
                navigation={this.props.navigation}
                picture={source}
                title={title}
                company={company.name}
                commitment={commitment}
                location={location}
                time={deadline}
              />
              <AboutBlock
                navigation={this.props.navigation}
                about={description}
              />
              <TagsContainer>
                <TagLine tagData={tags} lines={1} />
              </TagsContainer>
              <SimilarJobsBlock navigation={this.props.navigation} />
              <BackButtonContainer
                onPress={() => this.props.navigation.goBack()}
              >
                <BackButton name="ios-arrow-back" size={27} color="white" />
              </BackButtonContainer>
              <StarContainer
                onPress={() =>
                  this.setState({ isInterested: !this.state.isInterested })
                }
              >
                {this.state.star ? (
                  <StarClicked name="star" size={27} color="white" />
                ) : (
                  <Star name="star" size={27} color="white" />
                )}
              </StarContainer>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default JobScreen
