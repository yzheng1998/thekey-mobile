import React, { Component } from 'react'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import MainHeader from '../../../../components/MainHeader'
import JobsBackground from '../../../../../assets/JobsBackground.png'

export default class JobsHeader extends Component {
  render() {
    const { changeTab, selectedIndex } = this.props
    return (
      <MainHeader
        navigation={this.props.navigation}
        backgroundImage={JobsBackground}
        title="Jobs/Internships"
      >
        <SearchFilterTab
          selectedIndex={selectedIndex}
          updateState={changeTab}
          color="white"
          selectedColor="white"
          options={['All', 'Applied For', 'Saved']}
          width="70%"
        />
      </MainHeader>
    )
  }
}
