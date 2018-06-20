import React from 'react'
import { AppRegistry } from 'react-native'
import { getStorybookUI } from '@storybook/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '../theme'

import '../src/stories/ProfilePicBlock'
import '../src/stories/TagLine'
import '../src/stories/messageinput'
import '../src/stories/searchFilterTab'
import '../src/stories/chatcard'
import '../src/stories/ConnectionsRow'
import '../src/stories/SocietyCard'
import '../src/stories/LargeEventCard1'

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
