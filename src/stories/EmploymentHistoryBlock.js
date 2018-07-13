import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React, { Component } from 'react'
import EmploymentHistoryBlock from '../screens/AddCompanyReviewScreen/components/EmploymentHistoryBlock'
import Picker from '../components/PickerComponent'

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

  onChangeCompanyText = text => {
    this.setState({
      companyName: text,
    })
  }
  handleStarRating = val => {
    this.setState({ rating: val })
  }
  updateEmploymentType = employment => {
    this.setState({
      employmentType: employment,
    })
  }
  handleEnablePicker = () => {
    this.setState({
      yearPickerEnabled: true,
    })
  }
  handleDisablePicker = () => {
    this.setState({
      yearPickerEnabled: false,
    })
  }
  handleUsePicker = obj => {
    this.setState(obj)
  }
  handleCheckBox = isCurrentEmployee => {
    this.setState({
      isCurrentEmployee: !isCurrentEmployee,
    })
  }
  render() {
    return (
      <View style={style}>
        <EmploymentHistoryBlock
          rating={this.state.rating}
          handleStarRating={this.handleStarRating}
          employmentType={this.state.employmentType}
          updateEmploymentType={this.updateEmploymentType}
          isCurrentEmployee={this.state.isCurrentEmployee}
          yearLastWorked={this.state.yearLastWorked}
          companyName={this.state.companyName}
          onChangeCompanyText={this.onChangeCompanyText}
          handleEnablePicker={this.handleEnablePicker}
          handleCheckBox={this.handleCheckBox}
        />
        {this.state.yearPickerEnabled && (
          <Picker
            options={EmploymentHistoryBlock.createYearData()}
            doneOnPress={() => {
              this.handleDisablePicker()
            }}
            onValueChange={this.handleUsePicker}
            value={this.state.yearLastWorked}
            keyName="yearLastWorked"
          />
        )}
      </View>
    )
  }
}

storiesOf('CenteredView').add('EmploymentHistoryBlock for AddReview', () => (
  <CenteredView />
))
