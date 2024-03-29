import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import MyProfilePicBlock from '../screens/ProfileScreen/components/MyProfilePicBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('MyProfilePicBlock', () => (
  <CenteredView>
    <MyProfilePicBlock
      profilePic={{
        uri:
          'https://i.pinimg.com/originals/af/96/76/af9676c3de9d051e979de87dab55ef8b.jpg',
      }}
      name="Kofi Kwapong"
      city="Sarasota"
      state="Florida"
    />
  </CenteredView>
))
