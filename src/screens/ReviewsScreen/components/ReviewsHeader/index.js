import React, { Component } from 'react'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import {
  BackgroundImage,
  Tint,
  SafeView,
  HeaderContainer,
  Title,
  BackButtonContainer,
} from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import HeaderBackground from '../../../../../assets/headerBackground.jpeg'

export default class ReviewsHeader extends Component {
  render() {
    const { changeTab, selectedIndex } = this.props
    return (
      <BackgroundImage source={HeaderBackground}>
        <Tint>
          <SafeView>
            <HeaderContainer>
              <BackButtonContainer
                onPress={() => this.props.navigation.goBack()}
              >
                <BackArrow name="ios-arrow-back" size={27} color="white" />
              </BackButtonContainer>
              <Title>Company Reviews</Title>
              <SearchFilterTab
                options={['All', 'Highest Rated']}
                selectedColor="white"
                color="white"
                selectedIndex={selectedIndex}
                updateState={changeTab}
              />
            </HeaderContainer>
          </SafeView>
        </Tint>
      </BackgroundImage>
    )
  }
}
