import React, { Component } from 'react'
import Picker from '../../components/PickerComponent'
import CancelHeader from '../../components/CancelHeader'
import DescriptionBlock from './components/DescriptionBlock'
import EmploymentHistoryBlock from './components/EmploymentHistoryBlock'
import OptionalInfoBlock from './components/OptionalInfoBlock'
import TermsOfServiceConfirmation from './components/TermsOfServiceConfirmation'
import SubmitReviewButton from './components/SubmitReviewButton'
import { Background, Divider, ScreenScroll, SafeView } from './styles'
import { KeyboardAvoidingView, Alert } from 'react-native'

export default class AddCompanyReviewModal extends Component {
  state = {
    rating: 0,
    employmentType: 0,
    isCurrentEmployee: false,
    yearLastWorked: '',
    yearPickerEnabled: false,
    jobTitle: '',
    location: '',
    acceptedTerms: false,
    reviewTitle: '',
    reviewPros: '',
    reviewCons: '',
  }

  // handling state change for DescriptionBlock
  onChangeText = obj => {
    this.setState(obj)
  }
  // handling state change for EmploymentHistoryBlock
  onChangeCompanyText = companyName => {
    this.setState({ companyName })
  }
  handleStarRating = rating => {
    this.setState({ rating })
  }
  updateEmploymentType = employmentType => {
    this.setState({ employmentType })
  }
  togglePicker = () => {
    this.setState({
      yearPickerEnabled: !this.state.yearPickerEnabled,
    })
  }

  handleUsePicker = obj => {
    this.setState(obj)
  }
  toggleCheckBox = isCurrentEmployee => {
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
  clearState = () => {
    this.setState({
      rating: 0,
      employmentType: 0,
      isCurrentEmployee: false,
      yearLastWorked: '',
      yearPickerEnabled: false,
      jobTitle: '',
      location: '',
      acceptedTerms: false,
      reviewTitle: '',
      reviewPros: '',
      reviewCons: '',
    })
  }
  render() {
    const { isVisible, hideAddReview } = this.props
    const {
      rating,
      employmentType,
      isCurrentEmployee,
      yearLastWorked,
      yearPickerEnabled,
      jobTitle,
      location,
      acceptedTerms,
      reviewTitle,
      reviewPros,
      reviewCons,
    } = this.state
    const { companyId, companyName, picture } = this.props.state
    return (
      <Background
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isVisible}
      >
        <SafeView>
          <KeyboardAvoidingView enabled behavior="position">
            <ScreenScroll>
              <CancelHeader
                onCancel={() => {
                  Alert.alert(
                    'All information enetered will not be saved',
                    'Are you sure you want to cancel this review?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => null,
                      },
                      {
                        text: 'Yes',
                        onPress: () => {
                          hideAddReview()
                          this.clearState()
                        },
                      },
                    ],
                    { cancelable: false },
                  )
                }}
                title="Add Company Review"
              />
              <EmploymentHistoryBlock
                rating={rating}
                handleStarRating={this.handleStarRating}
                employmentType={employmentType}
                updateEmploymentType={this.updateEmploymentType}
                isCurrentEmployee={isCurrentEmployee}
                yearLastWorked={yearLastWorked}
                companyName={companyName}
                onChangeCompanyText={this.onChangeCompanyText}
                togglePicker={this.togglePicker}
                toggleCheckBox={this.toggleCheckBox}
                companyPicture={picture}
              />
              <Divider />
              <DescriptionBlock
                reviewTitle={reviewTitle}
                reviewPros={reviewPros}
                reviewCons={reviewCons}
                onChangeText={this.onChangeText}
              />
              <Divider />
              <OptionalInfoBlock
                jobTitle={jobTitle}
                location={location}
                updateJobTitle={this.updateJobTitle}
                updateLocation={this.updateLocation}
              />
              <Divider />
              <TermsOfServiceConfirmation
                acceptedTerms={acceptedTerms}
                handleAcceptedTerms={this.handleAcceptedTerms}
              />
              <SubmitReviewButton
                hideAddReview={hideAddReview}
                clearState={this.clearState}
                rating={rating}
                title={reviewTitle}
                pros={reviewPros}
                cons={reviewCons}
                employmentType={this.employmentType}
                current={isCurrentEmployee}
                jobTitle={jobTitle}
                location={location}
                acceptedTerms={acceptedTerms}
                companyId={companyId}
                lastWorked={yearLastWorked}
                navigation={this.props.navigation}
              />
            </ScreenScroll>
          </KeyboardAvoidingView>
        </SafeView>
        {yearPickerEnabled && (
          <Picker
            options={EmploymentHistoryBlock.createYearData()}
            doneOnPress={() => {
              this.togglePicker()
            }}
            onValueChange={this.handleUsePicker}
            value={yearLastWorked}
            keyName="yearLastWorked"
          />
        )}
      </Background>
    )
  }
}
