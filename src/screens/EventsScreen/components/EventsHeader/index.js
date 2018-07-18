import React, { Component } from 'react'
import {
  HeaderBackground,
  ButtonRow,
  BackButton,
  NewEventButton,
  Title,
} from './styles'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import NewEventIcon from 'react-native-vector-icons/FontAwesome'
import BackArrow from 'react-native-vector-icons/Ionicons'

export default class EventsHeader extends Component {
  render() {
    const { updateState, selectedIndex } = this.props
    return (
      <HeaderBackground>
        <ButtonRow>
          <BackButton onPress={() => this.props.navigation.goBack()}>
            <BackArrow name="ios-arrow-back" color="white" size={30} />
          </BackButton>
          <NewEventButton onPress={() => {}}>
            <NewEventIcon name="calendar-plus-o" size={20} color="white" />
          </NewEventButton>
        </ButtonRow>
        <Title>Events</Title>
        <SearchFilterTab
          options={['All', 'Today', 'Tomorrow', 'This Week']}
          updateState={updateState}
          color="white"
          selectedColor="white"
          selectedIndex={selectedIndex}
        />
      </HeaderBackground>
    )
  }
}
