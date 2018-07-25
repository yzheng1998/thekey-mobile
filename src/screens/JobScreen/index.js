import React, { Component } from 'react'
import {
  Container,
  TagsContainer,
  BackButtonContainer,
  ButtonHeader,
} from './styles'
import { Text } from 'react-native'
import JobPictureBlock from '../../components/JobPictureBlock'
import AboutBlock from './components/AboutBlock'
import TagLine from '../../components/TagLine'
import SimilarJobsBlock from '../../components/SimilarJobsBlock'
import BackButton from 'react-native-vector-icons/Ionicons'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import JobStarButton from '../../components/JobStarButton'

const GET_JOB = gql`
  query job($id: ID!) {
    job(id: $id) {
      id
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
      aboutRole
      aboutCompany
      bringToRole
      industry
      createdAt
      isInterested
    }
  }
`

class JobScreen extends Component {
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
            createdAt,
            tags,
            aboutRole,
            aboutCompany,
            bringToRole,
            industry,
            isInterested,
          } = data.job
          return (
            <Container>
              <JobPictureBlock
                navigation={this.props.navigation}
                picture={picture}
                title={title}
                company={company.name}
                commitment={commitment}
                location={location}
                time={createdAt}
              />
              <AboutBlock
                navigation={this.props.navigation}
                about={description}
                aboutRole={aboutRole}
                aboutCompany={aboutCompany}
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
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default JobScreen
