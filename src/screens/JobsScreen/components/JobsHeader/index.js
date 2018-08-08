import React, { Component } from 'react'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import {
  BackgroundImage,
  SafeView,
  BackButton,
  HeaderContainer,
  Title,
} from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import JobsBackground from '../../../../../assets/JobsBackground.png'

export default class JobsHeader extends Component {
  render() {
    const { changeTab, selectedIndex } = this.props
    return (
      <BackgroundImage source={JobsBackground}>
        <SafeView>
          <HeaderContainer>
            <BackButton onPress={() => this.props.navigation.goBack()}>
              <BackArrow name="ios-arrow-back" color="white" size={30} />
            </BackButton>
            <Title>Jobs/Internships</Title>
            <SearchFilterTab
              selectedIndex={selectedIndex}
              updateState={changeTab}
              color="white"
              selectedColor="white"
              options={['All', 'Applied For', 'Saved']}
              width="70%"
            />
          </HeaderContainer>
        </SafeView>
      </BackgroundImage>
    )
  }
}
