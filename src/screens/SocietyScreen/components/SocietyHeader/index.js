import React, { Component } from 'react'
import {
  SafeView,
  ButtonRow,
  BackButton,
  SearchButton,
  Title,
  BackgroundImage,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import SocietyBackground from '../../../../../assets/SocietyBackground.png'

export default class EventsHeader extends Component {
  render() {
    return (
      <BackgroundImage source={SocietyBackground}>
        <SafeView>
          <ButtonRow>
            <BackButton onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" color="white" size={30} />
            </BackButton>
            <SearchButton onPress={this.props.openModal}>
              <Icon name="md-search" color="white" size={25} />
            </SearchButton>
          </ButtonRow>
          <Title>The Society</Title>
        </SafeView>
      </BackgroundImage>
    )
  }
}
