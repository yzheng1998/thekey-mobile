import React, { Component } from 'react'
import { Modal } from 'react-native'
import { SettingsContainer, Menu } from '../../styles'
import SettingsHeader from './components/SettingsHeader'
import SettingsMenu from './components/SettingsMenu'
import Swiper from 'react-native-swiper'
import SettingsScreens from './components/SettingsScreens'

const screens = [
  {
    id: 0,
    title: 'Settings',
  },
  {
    id: 1,
    title: 'Password',
  },
  {
    id: 2,
    title: 'Logout',
  },
  {
    id: 3,
    title: 'Resumes',
  },
]

export default class Settings extends Component {
  state = {
    screenId: 0,
    displayId: 0,
  }

  render() {
    const { settings, state, email, resumes, toggleSettings } = this.props
    const swipe = title => {
      const screenId = screens.find(el => el.title === title).id
      if (screenId > 0) this.setState({ displayId: screenId })
      this.setState({ screenId })
      const currentIndex = this.swiper.state.index
      const targetIndex = screenId > 0 ? 1 : 0
      const offset = targetIndex - currentIndex
      this.swiper.scrollBy(offset)
    }
    return (
      <Modal visible={state.showSettings} transparent animationType="slide">
        <SettingsContainer>
          <Menu>
            <SettingsHeader
              swipe={swipe}
              settingsMain={this.state.screenId === 0}
              title={screens.find(el => el.id === this.state.screenId).title}
              hideSettings={toggleSettings}
            />
            <Swiper
              ref={component => {
                this.swiper = component
              }}
              showsPagination={false}
              loop={false}
              scrollEnabled={false}
            >
              <SettingsMenu
                email={email}
                swipe={swipe}
                emailPreferences={settings.emailPreferences}
                newsLetterPreferences={settings.newsLetterPreferences}
              />
              <SettingsScreens
                resumes={resumes}
                id={this.state.displayId}
                navigation={this.props.navigation}
              />
            </Swiper>
          </Menu>
        </SettingsContainer>
      </Modal>
    )
  }
}
