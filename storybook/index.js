import { AppRegistry } from 'react-native'
import { getStorybookUI } from '@storybook/react-native'

import '../src/stories/ProfilePicBlock'

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
})
AppRegistry.registerComponent('thekeymobile', () => StorybookUI)
