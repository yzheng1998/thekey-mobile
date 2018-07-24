import React, { Component } from 'react'
import {
  BackgroundImage,
  Tint,
  SafeView,
  HeaderContainer,
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
      <BackgroundImage
        source={{
          uri:
            'https://images.unsplash.com/photo-1503238774835-1e800884d53b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e47ac33daae3f0b9c2add178ea367801&auto=format&fit=crop&w=1950&q=80',
        }}
      >
        <Tint>
          <SafeView>
            <HeaderContainer>
              <ButtonRow>
                <BackButton onPress={() => this.props.navigation.goBack()}>
                  <BackArrow name="ios-arrow-back" color="white" size={30} />
                </BackButton>
                <NewEventButton onPress={() => {}}>
                  <NewEventIcon
                    name="calendar-plus-o"
                    size={20}
                    color="white"
                  />
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
            </HeaderContainer>
          </SafeView>
        </Tint>
      </BackgroundImage>
    )
  }
}
