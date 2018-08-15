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

export default class SocietyHeader extends Component {
  render() {
    return (
      <BackgroundImage source={SocietyBackground}>
        <SafeView>
          <ButtonRow>
            <BackButton onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" color="white" size={30} />
            </BackButton>
            {this.props.openModal && (
              <SearchButton onPress={this.props.openModal}>
                <Icon name="md-search" color="white" size={25} />
              </SearchButton>
            )}
          </ButtonRow>
          <Title>{this.props.title || 'The Society'}</Title>
        </SafeView>
      </BackgroundImage>
    )
  }
}
