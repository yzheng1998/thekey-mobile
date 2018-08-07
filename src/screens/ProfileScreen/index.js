import React, { Component } from 'react'
import { ScreenContainer, Divider, SettingsContainer, Menu } from './styles'
import SettingsHeader from './components/SettingsHeader'
import { Modal, AsyncStorage } from 'react-native'
import MyProfilePicBlock from './components/MyProfilePicBlock'
import MyProfileBioBlock from './components/MyProfileBioBlock'
import ButtonRowView from './components/ButtonRowView'
import Description from './components/Description'
import EducationListView from './components/EducationListView'
import ExperienceListView from './components/ExperienceListView'
import ContactContainerView from './components/ContactContainerView'
import SettingsMenu from './components/SettingsMenu'
import { Query } from 'react-apollo'
import { GET_USER } from './query'
import nodeEmoji from 'node-emoji'
import Logout from './components/SettingsScreens/Logout'
import { client } from '../../apollo'
import Swiper from 'react-native-swiper'
import LoadingWrapper from '../../components/LoadingWrapper'

const screens = [
  {
    id: 0,
    title: 'Settings',
  },
  {
    id: 1,
    title: 'Logout',
  },
]

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
    id: 0,
    showSettings: false,
  }

  hideSettings = () => {
    this.setState({
      showSettings: !this.state.showSettings,
    })
  }

  logout = async () => {
    await AsyncStorage.clear()
    client.resetStore()
    this.props.navigation.navigate('Landing')
  }

  render() {
    return (
      <Query
        query={GET_USER}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ loading, data }) => {
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
          } = data.viewer
          const emojiList = preferredWaysToMeet.map(emoji =>
            nodeEmoji.get(emoji.wayToMeet.toLowerCase()),
          )
          const swipe = targetIndex => {
            const currentIndex = this.swiper.state.index
            const offset = targetIndex - currentIndex
            this.swiper.scrollBy(offset)
          }
          return (
            <ScreenContainer>
              <Modal
                visible={this.state.showSettings}
                transparent
                animationType="slide"
              >
                <SettingsContainer>
                  <Menu>
                    <SettingsHeader
                      onPress={swipe}
                      settingsMain={this.state.id === 0}
                      title={screens.find(el => el.id === this.state.id).title}
                      hideSettings={this.hideSettings}
                    />
                    <Swiper
                      ref={component => {
                        this.swiper = component
                      }}
                      showsPagination={false}
                      loop={false}
                      scrollEnabled={false}
                      onIndexChanged={index => {
                        this.setState({ id: index })
                      }}
                    >
                      <SettingsMenu
                        email={email}
                        onPress={swipe}
                        emailPreferences={settings.emailPreferences}
                        newsLetterPreferences={settings.newsLetterPreferences}
                      />
                      <Logout onPress={this.logout} />
                    </Swiper>
                  </Menu>
                </SettingsContainer>
              </Modal>
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
                    index: 1,
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
