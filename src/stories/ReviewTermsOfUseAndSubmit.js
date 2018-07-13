import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'
import TermsOfServiceConfirmation from '../screens/AddCompanyReviewScreen/components/TermsOfServiceConfirmation'
import SubmitReviewButton from '../screens/AddCompanyReviewScreen/components/SubmitReviewButton'

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
  // toggles state variable once user agrees/disagrees to terms of use
  handleAcceptedTerms = flag => {
    this.setState({ acceptedTerms: !flag })
  }
  render() {
    return (
      <View style={style}>
        <TermsOfServiceConfirmation
          acceptedTerms={this.state.acceptedTerms}
          handleAcceptedTerms={this.handleAcceptedTerms}
        />
        <SubmitReviewButton />
      </View>
    )
  }
}

storiesOf('CenteredView').add(
  'Terms of use & submit button for AddReview',
  () => <CenteredView />,
)
