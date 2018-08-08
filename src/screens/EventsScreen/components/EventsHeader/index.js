import React, { Component } from 'react'
import {
  BackgroundImage,
  SafeView,
  HeaderContainer,
  ButtonRow,
  BackButton,
  Title,
} from './styles'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import BackArrow from 'react-native-vector-icons/Ionicons'
import EventsBackground from '../../../../../assets/EventsBackground.png'

export default class EventsHeader extends Component {
  render() {
    const { updateState, selectedIndex } = this.props
    return (
      <BackgroundImage source={EventsBackground}>
        <SafeView>
          <HeaderContainer>
            <ButtonRow>
              <BackButton onPress={() => this.props.navigation.goBack()}>
                <BackArrow name="ios-arrow-back" color="white" size={30} />
              </BackButton>
            </ButtonRow>
            <Title>Events</Title>
            <SearchFilterTab
              options={['All', 'Today', 'Week', 'Month', 'Saved']}
              updateState={updateState}
              color="white"
              selectedColor="white"
              selectedIndex={selectedIndex}
            />
          </HeaderContainer>
        </SafeView>
      </BackgroundImage>
    )
  }
}
