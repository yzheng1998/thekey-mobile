import React, { Component } from 'react'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import {
  BackgroundImage,
  SafeView,
  HeaderContainer,
  Title,
  BackButtonContainer,
} from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import ReviewsBackground from '../../../../../assets/ReviewsBackground.png'

export default class ReviewsHeader extends Component {
  render() {
    const { changeTab, selectedIndex } = this.props
    return (
      <BackgroundImage source={ReviewsBackground}>
        <SafeView>
          <HeaderContainer>
            <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
              <BackArrow name="ios-arrow-back" size={27} color="white" />
            </BackButtonContainer>
            <Title>Reviews</Title>
            <SearchFilterTab
              options={['All', 'Highest Rated']}
              selectedColor="white"
              color="white"
              selectedIndex={selectedIndex}
              updateState={changeTab}
              width="60%"
            />
          </HeaderContainer>
        </SafeView>
      </BackgroundImage>
    )
  }
}
