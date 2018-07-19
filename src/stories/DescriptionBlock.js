import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'
import DescriptionBlock from '../screens/AddCompanyReviewScreen/components/DescriptionBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
}

class CenteredView extends Component {
  state = {
    rating: 0,
    employmentType: 0,
    isCurrentEmployee: false,
    yearLastWorked: new Date().getFullYear(),
    companyName: 'Doofenshmirtz Evil Incorporated',
    jobTitle: 'General Manager',
    location: 'Enter Location',
    acceptedTerms: false,
    reviewTitle: '',
    reviewPros: '',
    reviewCons: '',
  }
  onChangeText = obj => {
    this.setState(obj)
  }
  render() {
    return (
      <View style={style}>
        <DescriptionBlock
          reviewTitle={this.state.reviewTitle}
          reviewPros={this.state.reviewPros}
          reviewCons={this.state.reviewCons}
          onChangeText={this.onChangeText}
        />
      </View>
    )
  }
}

storiesOf('CenteredView').add('DescriptionBlock for AddReview', () => (
  <CenteredView />
))
