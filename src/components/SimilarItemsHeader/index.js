import React, { Component } from 'react'
import {
  BackgroundImage,
  SafeView,
  BackButton,
  HeaderContainer,
  Title,
} from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'

export default class SimilarItemsHeader extends Component {
  render() {
    const { backgroundImage, title, navigation } = this.props
    return (
      <BackgroundImage source={backgroundImage}>
        <SafeView>
          <HeaderContainer>
            <BackButton onPress={() => navigation.goBack()}>
              <BackArrow name="ios-arrow-back" color="white" size={30} />
            </BackButton>
            <Title>{title}</Title>
          </HeaderContainer>
        </SafeView>
      </BackgroundImage>
    )
  }
}
