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
import constraints from './constraints'
import LocationSearchModal from '../../components/HometownSearchModal'

const validate = require('validate.js')

export default class AddCompanyReviewModal extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
  }

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
    displayErrors: {},
    errors: {},
    touched: {},
    showLocationSearchModal: false,
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        reviewTitle: this.state.reviewTitle,
        reviewPros: this.state.reviewPros,
        reviewCons: this.state.reviewCons,
      },
      constraints,
    )

    const constructDisplayErrors = () => {
      const displayErrors = {}
      Object.keys(errors || {}).forEach(key => {
        if (this.state.touched[key]) {
          displayErrors[key] = errors[key]
        }
      })
      return displayErrors
    }

    const errorsReduced =
      Object.keys(errors || {}).length <
      Object.keys(this.state.errors || {}).length

    if (!isOnChangeText || (isOnChangeText && errorsReduced)) {
      this.setState({ displayErrors: constructDisplayErrors() })
    }
    this.setState({ errors })
  }

  addTouched = key => {
    const touched = {
      ...this.state.touched,
      [key]: true,
    }
    this.setState({ touched })
  }

  openPicker = () => {
    this.setState({
      yearPickerEnabled: true,
    })
    this.picker.showActionSheet()
  }
  handleUsePicker = obj => {
    this.setState(obj)
  }
  toggleLocationSearchModal = () => {
    this.setState({
      showLocationSearchModal: !this.state.showLocationSearchModal,
    })
  }
  updateJobTitle = jobTitle => {
    this.setState({ jobTitle })
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
      displayErrors: {},
      errors: {},
      touched: [],
      showLocationSearchModal: false,
    })
  }

  scrollToInput(textInput) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(textInput)
  }

  render() {
    const {
      isVisible,
      hideAddReview,
      refetchReviews,
      refetchCompanies,
    } = this.props
    const {
      yearLastWorked,
      yearPickerEnabled,
      acceptedTerms,
      errors,
      rating,
      employmentType,
      showLocationSearchModal,
    } = this.state
    const noErrors =
      !errors && acceptedTerms && rating && employmentType && yearLastWorked
    return (
      <Background
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isVisible}
      >
        <LocationSearchModal
          setText={obj => this.setState({ location: obj.hometown })}
          onPress={this.toggleLocationSearchModal}
          visible={showLocationSearchModal}
        />
        <SafeView>
          <KeyboardAvoidingView enabled behavior="padding">
            <ScreenScroll>
              <CancelHeader
                onCancel={() => {
                  Alert.alert(
                    'All information entered will not be saved',
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
                state={{ ...this.state, ...this.props.state }}
                updateState={this.updateState}
                openPicker={this.openPicker}
              />
              <Divider />
              <DescriptionBlock
                addTouched={this.addTouched}
                validateForm={this.validateForm}
                state={this.state}
                updateState={this.updateState}
              />
              <Divider />
              <OptionalInfoBlock
                state={this.state}
                updateJobTitle={this.updateJobTitle}
                toggleLocationModal={this.toggleLocationSearchModal}
              />
              <Divider />
              <TermsOfServiceConfirmation
                acceptedTerms={acceptedTerms}
                updateState={this.updateState}
              />
              <SubmitReviewButton
                refetchReviews={refetchReviews}
                refetchCompanies={refetchCompanies}
                state={{ ...this.state, ...this.props.state }}
                hideAddReview={hideAddReview}
                clearState={this.clearState}
                navigation={this.props.navigation}
                disabled={!noErrors}
              />
            </ScreenScroll>
          </KeyboardAvoidingView>
        </SafeView>
        <Picker
          visible={yearPickerEnabled}
          ref={picker => {
            this.picker = picker
          }}
          options={EmploymentHistoryBlock.createYearData()}
          doneOnPress={() => {
            this.setState({ yearPickerEnabled: false })
          }}
          onValueChange={this.handleUsePicker}
          value={yearLastWorked}
          keyName="yearLastWorked"
        />
      </Background>
    )
  }
}
