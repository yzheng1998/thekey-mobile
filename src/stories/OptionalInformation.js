import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'
import OptionalInfoBlock from '../screens/AddCompanyReviewScreen/components/OptionalInfoBlock'

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
  updateJobTitle = title => {
    this.setState({ jobTitle: title })
  }
  updateLocation = location => {
    this.setState({ location })
  }
  render() {
    return (
      <View style={style}>
        <OptionalInfoBlock
          jobTitle={this.state.jobTitle}
          location={this.state.location}
          updateJobTitle={this.updateJobTitle}
          updateLocation={this.updateLocation}
        />
      </View>
    )
  }
}

storiesOf('CenteredView').add('OptionalInfoBlock for AddReview', () => (
  <CenteredView />
))
