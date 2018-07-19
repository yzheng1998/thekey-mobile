import React, { Component } from 'react'
import {
  HeaderBackground,
  ButtonRow,
  BackButton,
  SearchButton,
  Title,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default class EventsHeader extends Component {
  render() {
    return (
      <HeaderBackground>
        <ButtonRow>
          <BackButton onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back" color="white" size={30} />
          </BackButton>
          <SearchButton onPress={this.props.openModal}>
            <Icon name="md-search" color="white" size={25} />
          </SearchButton>
        </ButtonRow>
        <Title>The Society</Title>
      </HeaderBackground>
    )
  }
}
