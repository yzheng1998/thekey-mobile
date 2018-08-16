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
import nodeEmoji from 'node-emoji'
import Settings from './components/Settings'
import LoadingWrapper from '../../components/LoadingWrapper'

const lookingForOptions = [
  { value: 'BUSINESSMENTOR', label: 'Business Mentor' },
  { value: 'FRIENDS', label: 'Friends' },
  { value: 'BUSINESSPARTNER', label: 'Business Partner' },
  { value: 'EMPLOYMENT', label: 'Employment' },
  { value: 'SCHOOLADVICE', label: 'School Advice' },
]

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
            interestingFact,
            preferredWaysToMeet,
            tags,
            workExperiences,
            lookingFor,
            skills,
            settings,
            resumes,
          } = data.viewer
          const emojiList = preferredWaysToMeet.map(emoji =>
            nodeEmoji.get(emoji.wayToMeet.toLowerCase()),
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
              <Description
                row
                title="Looking For"
                content={
                  lookingForOptions.find(el => el.value === lookingFor).label
                }
              />
              <Description
                row
                title="Preferred Ways To Meet"
                content={emojiList}
              />
              <Divider />
              <EducationListView educationData={education} />
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
