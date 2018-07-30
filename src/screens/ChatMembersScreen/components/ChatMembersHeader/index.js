import React, { Component } from 'react'
import BackArrow from 'react-native-vector-icons/Ionicons'
import {
  SafeView,
  Title,
  TitleContainer,
  BackButtonContainer,
  BackButton,
} from './styles'

export default class ChatMembersHeader extends Component {
  render() {
    const { navigation } = this.props
    return (
      <SafeView>
        <TitleContainer>
          <Title>Chat Members</Title>
          <BackButtonContainer>
            <BackButton onPress={() => navigation.goBack()}>
              <BackArrow name="ios-arrow-back" color="rgb(3,3,3)" size={26} />
            </BackButton>
          </BackButtonContainer>
        </TitleContainer>
      </SafeView>
    )
  }
}
