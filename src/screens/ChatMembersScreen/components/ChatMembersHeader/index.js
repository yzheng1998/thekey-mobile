import React, { Component } from 'react'
import BackArrow from 'react-native-vector-icons/Ionicons'
import PlusIcon from 'react-native-vector-icons/Entypo'
import {
  SafeView,
  Title,
  TitleContainer,
  ButtonRow,
  BackButton,
  PlusButton,
} from './styles'

export default class ChatMembersHeader extends Component {
  render() {
    const { navigation, openAddToChatModal } = this.props
    return (
      <SafeView>
        <TitleContainer>
          <Title>Chat Members</Title>
          <ButtonRow>
            <BackButton onPress={() => navigation.goBack()}>
              <BackArrow name="ios-arrow-back" color="rgb(3,3,3)" size={26} />
            </BackButton>
            <PlusButton onPress={openAddToChatModal}>
              <PlusIcon name="plus" size={23} color="black" />
            </PlusButton>
          </ButtonRow>
        </TitleContainer>
      </SafeView>
    )
  }
}