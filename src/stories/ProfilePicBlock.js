import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'

import ProfilePicBlock from '../screens/SocietyScreen/components/ProfilePicBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView')
  .add('ProfilePicBlock1', () => (
    <CenteredView>
      <ProfilePicBlock
        profilePic={{
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        }}
        name="Yuke Zheng"
        city="Cleveland"
        state="Ohio"
      />
    </CenteredView>
  ))
  .add('ProfilePicBlock2', () => (
    <CenteredView>
      <ProfilePicBlock
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
