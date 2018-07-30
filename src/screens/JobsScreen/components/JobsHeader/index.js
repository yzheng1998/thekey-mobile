import React, { Component } from 'react'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import {
  BackgroundImage,
  Tint,
  SafeView,
  BackButton,
  HeaderContainer,
  Title,
} from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'

export default class JobsHeader extends Component {
  render() {
    const { changeTab, selectedIndex } = this.props
    return (
      <BackgroundImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1503238774835-1e800884d53b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e47ac33daae3f0b9c2add178ea367801&auto=format&fit=crop&w=1950&q=80',
        }}
      >
        <Tint>
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
              />
            </HeaderContainer>
          </SafeView>
        </Tint>
      </BackgroundImage>
    )
  }
}
