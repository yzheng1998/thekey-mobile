import React, { Component } from 'react'
import SearchFilterTab from '../../../../components/SearchFilterTab'
import MainHeader from '../../../../components/MainHeader'
import ReviewsBackground from '../../../../../assets/ReviewsBackground.png'

export default class ReviewsHeader extends Component {
  render() {
    const { changeTab, selectedIndex } = this.props
    return (
      <MainHeader
        navigation={this.props.navigation}
        backgroundImage={ReviewsBackground}
        title="Reviews"
      >
        <SearchFilterTab
          options={['All', 'Highest Rated', '']}
          selectedColor="white"
          color="white"
          selectedIndex={selectedIndex}
          updateState={changeTab}
          width="62%"
        />
      </MainHeader>
    )
  }
}
