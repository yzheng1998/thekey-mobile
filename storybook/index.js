import React from 'react'
import { AppRegistry } from 'react-native'
import { getStorybookUI } from '@storybook/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '../theme'

import '../src/stories/ProfilePicBlock'
import '../src/stories/PictureHeader'
import '../src/stories/TagLine'
import '../src/stories/messageinput'
import '../src/stories/searchFilterTab'
import '../src/stories/chatcard'
import '../src/stories/ConnectionsRow'
import '../src/stories/applynow'
import '../src/stories/MessageBubble'
import '../src/stories/JobCard'
import '../src/stories/SocietyCard'
import '../src/stories/LargeEventCard1'
import '../src/stories/CompanyCard'
import '../src/stories/SearchBar'
import '../src/stories/MyProfilePicBlock'
import '../src/stories/MyProfileBioBlock'
import '../src/stories/EducationRow'
import '../src/stories/ProfileInfoRow'
import '../src/stories/SmallEventCard'
import '../src/stories/similarjobs'
import '../src/stories/aboutblock'
import '../src/stories/summary'
import '../src/stories/jobpictureblock'
import '../src/stories/ExperienceRow'
import '../src/stories/ProfileScreen'
import '../src/stories/ButtonRowView'
import '../src/stories/ContactContainerView'
import '../src/stories/Description'
import '../src/stories/EducationListView'
import '../src/stories/ExperienceListView'
import '../src/stories/eventPictureBlock'
import '../src/stories/reviewsScreen'
import '../src/stories/jobScreen'
import '../src/stories/similarEvents'
import '../src/stories/HorizontalEditField'
import '../src/stories/EditContactBlock'
import '../src/stories/BlockButton'
import '../src/stories/eventScreen'
import '../src/stories/similarEventsScreen'
import '../src/stories/similarJobsScreen'
import '../src/stories/EditProfileScreen'
import '../src/stories/BasicInfoBlock'
import '../src/stories/DescriptionBlock'
import '../src/stories/loginscreen'
import '../src/stories/addCompanyScreen'
import '../src/stories/memberScreen'
import '../src/stories/reviewBlock'
import '../src/stories/filterBlock'
import '../src/stories/reviewPictureBlock'
import '../src/stories/ReviewScreen'
import '../src/stories/EmploymentHistoryBlock'
import '../src/stories/connectionCard'
import '../src/stories/OptionalInformation'
import '../src/stories/SettingsMenu'
import '../src/stories/LineInput'

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
})

const StorybookApp = () => (
  <ThemeProvider theme={theme}>
    <StorybookUI />
  </ThemeProvider>
)

AppRegistry.registerComponent('thekeymobile', () => StorybookApp)
