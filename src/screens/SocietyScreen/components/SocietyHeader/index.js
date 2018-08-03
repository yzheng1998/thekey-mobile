import React, { Component } from 'react'
import {
  SafeView,
  Tint,
  ButtonRow,
  BackButton,
  SearchButton,
  Title,
  BackgroundImage,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import HeaderBackground from '../../../../../assets/headerBackground.jpeg'

export default class EventsHeader extends Component {
  render() {
    return (
      <BackgroundImage source={HeaderBackground}>
        <Tint>
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
        </Tint>
      </BackgroundImage>
    )
  }
}
