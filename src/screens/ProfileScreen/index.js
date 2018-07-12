import React, { Component } from 'react'
import { ScreenContainer, Divider } from './styles'

import MyProfilePicBlock from './components/MyProfilePicBlock'
import MyProfileBioBlock from './components/MyProfileBioBlock'
import ButtonRowView from './components/ButtonRowView'
import Description from './components/Description'
import EducationListView from './components/EducationListView'
import ExperienceListView from './components/ExperienceListView'
import ContactContainerView from './components/ContactContainerView'

import { Query } from 'react-apollo'
import { GET_USER } from './query'

export default class ProfileScreen extends Component {
  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          const {
            email,
            firstName,
            lastName,
            demographics,
            bio,
            linkedIn,
            facebook,
            twitter,
            profilePicture,
            education,
            interestingFact,
            preferredWaysToMeet,
            tags,
            workExperiences,
            lookingFor,
            skills,
          } = data.viewer
          return (
            <ScreenContainer>
              <MyProfilePicBlock
                name={`${firstName} ${lastName}`}
                hometown={demographics.hometown}
                profilePic={{
                  uri:
                    profilePicture ||
                    'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80',
                }}
                navigation={this.props.navigation}
              />
              <ButtonRowView goBack={() => this.props.navigation.goBack()} />
              <MyProfileBioBlock tagData={tags} bioText={bio} />
              <Divider />
              <Description row title="Looking For" content={lookingFor} />
              <Description
                row
                title="Preferred Ways To Meet"
                content={preferredWaysToMeet}
              />
              <Divider />
              <EducationListView educationData={education} />
              <Divider />
              <ExperienceListView experienceData={workExperiences} />
              <Description
                row={false}
                title="Interesting Fact About Me"
                content={interestingFact}
              />
              <Description row={false} title="Skills" content={skills} />
              <ContactContainerView
                linkedIn={linkedIn}
                email={email}
                facebook={facebook}
                twitter={twitter}
              />
            </ScreenContainer>
          )
        }}
      </Query>
    )
  }
}
