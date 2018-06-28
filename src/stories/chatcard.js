import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ChatCard from '../components/ChatCard'
import Jon from '../../assets/Jon.jpg'
import TheRock from '../../assets/therock.jpg'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView')
  .add('ChatCard1', () => (
    <CenteredView>
      <ChatCard
        name="Jon Snow"
        timeStamp="2018-06-12 09:18:47.822-04"
        message="Have you learnt to bend the knee?"
        profileImage={Jon}
      />
    </CenteredView>
  ))
  .add('ChatCard2', () => (
    <CenteredView>
      <ChatCard
        name="The Rock"
        timeStamp="2018-06-15 19:18:47.822-04"
        message="Can you smell what's cooking Can you smell what's cooking Can you smell what's cooking Can you smell what's cooking"
        profileImage={TheRock}
      />
    </CenteredView>
  ))
