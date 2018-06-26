import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import MyProfileBioBlock from '../screens/ProfileScreen/components/MyProfileBioBlock'
import { tagData } from './SocietyCard'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

const text =
  'Lorem ipsum dolor sit amet, viderer luptatum molestiae duo id, nisl movet imperdiet id sea. Mea ea soluta sapientem, nam cu natum idque discere. Qui et possim tibique. Mea et choro invenire platonem. Aperiri evertitur usu ei, ius no mucius verterem cotidieque, et vim atomorum incorrupte definitiones. Velit eruditi mel eu. Summo veniam apeirian nec in, in eligendi molestiae intellegat vim, invidunt partiendo vel ex. No prima graecis vix, eum legere fabellas legendos et. An semper molestie mel, no causae facilisis his.'

storiesOf('CenteredView').add('MyProfileBioBlock', () => (
  <CenteredView>
    <MyProfileBioBlock tagData={tagData} bioText={text} />
  </CenteredView>
))
