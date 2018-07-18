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
    acceptedTerms: false,
  }
  // toggles state variable once user agrees/disagrees to terms of use
  handleAcceptedTerms = () => {
    this.setState({ acceptedTerms: !this.state.acceptedTerms })
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
