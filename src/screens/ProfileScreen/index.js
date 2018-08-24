import React, { Component } from 'react'
import { ScreenContainer, Divider } from './styles'
import MyProfilePicBlock from './components/MyProfilePicBlock'
import MyProfileBioBlock from './components/MyProfileBioBlock'
import ButtonRowView from './components/ButtonRowView'
import ArrayDescription from './components/ArrayDescription'
import EducationListView from './components/EducationListView'
import ExperienceListView from './components/ExperienceListView'
import ContactContainerView from './components/ContactContainerView'
import { Query } from 'react-apollo'
import { GET_USER } from './query'
import Settings from './components/Settings'
import LoadingWrapper from '../../components/LoadingWrapper'
import { currentInitiativesOptions, waysToMeetOptions } from '../../constants'

const defaultProfilePicture =
  'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80'

export default class ProfileScreen extends Component {
  state = {
    showSettings: false,
  }
  toggleSettings = () => {
    this.setState({ showSettings: !this.state.showSettings })
  }
  render() {
    return (
      <Query
        query={GET_USER}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, data, refetch }) => {
          if (loading) return <LoadingWrapper loading />
          const {
            id,
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
            preferredWaysToMeet,
            tags,
            workExperiences,
            currentInitiatives,

            settings,
            resumes,
          } = data.viewer
          const emojiList = preferredWaysToMeet.map(
            emoji =>
              waysToMeetOptions.find(el => el.value === emoji.wayToMeet).label,
          )
          const initiativeEmojis = currentInitiatives.map(
            emoji =>
              currentInitiativesOptions.find(
                el => el.value === emoji.initiative,
              ).label,
          )

          return (
            <ScreenContainer>
              <Settings
                state={this.state}
                email={email}
                settings={settings}
                toggleSettings={this.toggleSettings}
                navigation={this.props.navigation}
                resumes={resumes}
                id={this.props.navigation.getParam('id')}
                refetch={refetch}
              />
              <MyProfilePicBlock
                name={`${firstName} ${lastName}`}
                hometown={demographics.hometown}
                profilePic={profilePicture || defaultProfilePicture}
                id={id}
                navigation={this.props.navigation}
              />
              <ButtonRowView
                goBack={() => this.props.navigation.goBack()}
                showSettings={() =>
                  this.setState({
                    showSettings: !this.state.showSettings,
                  })
                }
              />
              <MyProfileBioBlock tagData={tags} bioText={bio} />
              <Divider />
              <ArrayDescription
                title="Current Initiatives"
                content={initiativeEmojis}
              />
              <Divider />
              <ArrayDescription
                title="Preferred Ways To Meet"
                content={emojiList}
              />
              <Divider />
              <EducationListView educationData={education} />
              <ExperienceListView experienceData={workExperiences} />
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
