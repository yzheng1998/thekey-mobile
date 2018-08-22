import React, { Component } from 'react'
import MainHeader from '../../../../components/MainHeader'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import EventsBackground from '../../../../../assets/EventsBackground.png'

export default class EventsHeader extends Component {
  render() {
    const { updateState, selectedIndex } = this.props
    return (
      <MainHeader
        navigation={this.props.navigation}
        backgroundImage={EventsBackground}
        title="Events"
      >
        <SearchFilterTab
          options={['All', 'Today', 'Week', 'Month', 'Saved']}
          updateState={updateState}
          color="white"
          selectedColor="white"
          selectedIndex={selectedIndex}
        />
      </MainHeader>
    )
  }
}
