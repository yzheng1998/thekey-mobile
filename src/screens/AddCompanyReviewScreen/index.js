import React, { Component } from 'react'
import Picker from '../../components/PickerComponent'
import DescriptionBlock from './components/DescriptionBlock'
import EmploymentHistoryBlock from './components/EmploymentHistoryBlock'
import OptionalInfoBlock from './components/OptionalInfoBlock'
import TermsOfServiceConfirmation from './components/TermsOfServiceConfirmation'
import SubmitReviewButton from './components/SubmitReviewButton'
import { Background, Divider, ScreenScroll, SafeView } from './styles'

export default class AddCompanyReviewScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      employmentType: 0,
      isCurrentEmployee: false,
      yearLastWorked: new Date().getFullYear(),
      yearPickerEnabled: false,
      companyName: 'Beats by Dre',
      jobTitle: 'General Manager',
      location: 'Enter Location',
      acceptedTerms: false,
      reviewTitle: '',
      reviewPros: '',
      reviewCons: '',
    }
  }
  // handling state change for DescriptionBlock
  onChangeText = obj => {
    this.setState(obj)
  }
  // handling state change for EmploymentHistoryBlock
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

  // handling state change for OptionalInfoBlock
  updateJobTitle = title => {
    this.setState({ jobTitle: title })
  }
  updateLocation = location => {
    this.setState({ location })
  }
  // handling state change for terms of use
  handleAcceptedTerms = () => {
    this.setState({ acceptedTerms: !this.state.acceptedTerms })
  }
  render() {
    const companyId = this.props.navigation.getParam('companyId')
    return (
      <Background>
        <SafeView>
          <ScreenScroll>
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
            <Divider />
            <DescriptionBlock
              reviewTitle={this.state.reviewTitle}
              reviewPros={this.state.reviewPros}
              reviewCons={this.state.reviewCons}
              onChangeText={this.onChangeText}
            />
            <Divider />
            <OptionalInfoBlock
              jobTitle={this.state.jobTitle}
              location={this.state.location}
              updateJobTitle={this.updateJobTitle}
              updateLocation={this.updateLocation}
            />
            <Divider />
            <TermsOfServiceConfirmation
              acceptedTerms={this.state.acceptedTerms}
              handleAcceptedTerms={this.handleAcceptedTerms}
            />
            <SubmitReviewButton
              rating={this.state.rating}
              title={this.state.reviewTitle}
              pros={this.state.reviewPros}
              cons={this.state.reviewCons}
              employmentType={this.employmentType}
              current={this.state.isCurrentEmployee}
              jobTitle={this.state.jobTitle}
              location={this.state.location}
              acceptedTerms={this.state.acceptedTerms}
              companyId={companyId}
              lastWorked={this.state.yearLastWorked}
              navigation={this.props.navigation}
              refreshData={this.props.navigation.getParam('refreshData')}
            />
          </ScreenScroll>
        </SafeView>
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
      </Background>
    )
  }
}
