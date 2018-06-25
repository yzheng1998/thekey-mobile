import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'

import PictureHeader from '../components/PictureHeader'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('PictureHeader1', () => (
  <CenteredView>
    <PictureHeader
      picture={{
        uri:
          'https://i.pinimg.com/originals/af/96/76/af9676c3de9d051e979de87dab55ef8b.jpg',
      }}
      avatarSize={171}
    />
  </CenteredView>
))
