import React, { Component } from 'react'
import { Keyboard, View } from 'react-native'
import { connect } from 'react-redux'
import {
  ScreenContainer,
  ContentContainer,
  RowContainer,
  SearchIcon,
} from './styles'
import Header from '../../components/Header'
import SubmitButton from '../../components/SubmitButton'
import RegistrationPicker from '../../components/RegistrationPicker'
import LineInput from '../../components/LineInput'
import PickerComponent from '../../components/PickerComponent'
import SchoolSearchModal from '../../components/SchoolSearchModal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { degreeTypeOptions } from '../../constants'
import constraints from './constraints'

import { updateEducations } from '../../redux/actions/membershipApplication'

import nodeEmoji from 'node-emoji'

const validate = require('validate.js')

const createYearData = () => {
  const yearArray = []
  for (let i = new Date().getFullYear() + 10; i >= 1970; i -= 1) {
    yearArray.push({ label: i.toString(), value: i.toString() })
  }
  return yearArray
}

const findLabel = (value, options) =>
  options.find(el => el.value === value).label

const mapStateToProps = state => ({
  educations: state.membershipApplication.educations,
})

const mapDispatchToProps = {
  updateEducations,
}

class AddEducationScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDegreeTypePicker: false,
      showStartYearPicker: false,
      showEndYearPicker: false,
      showUniversitySearch: false,
      majorInputFocused: false,
      educationListData: [],
      schoolID: '',
      schoolName: '',
      schoolType: '',
      degreeType: '',
      location: '',
      major: '',
      startYear: '',
      endYear: '',
      errors: {},
      displayErrors: {},
      touched: {},
    }
  }

  handleEducationChange = () => {
    this.props.updateEducations({
      educations: this.state.educationListData,
    })
  }

  addEducation = schoolObj => {
    this.setState(
      {
        educationListData: [schoolObj],
      },
      this.handleEducationChange,
    )
  }

  clearState = () => {
    this.setState({
      schoolId: '',
      schoolName: '',
      location: '',
      major: '',
      startYear: '',
      endYear: '',
      degreeType: '',
      displayErrors: {},
      errors: {},
      touched: {},
      showUniversitySearch: false,
    })
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        schoolName: this.state.schoolName,
        degreeType: this.state.degreeType,
        major: this.state.major,
        startYear: this.state.startYear,
        endYear: this.state.endYear,
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

  updateState = this.setState.bind(this)

  toggleSchoolModal = () => {
    this.setState({ showUniversitySearch: !this.state.showUniversitySearch })
  }

  render() {
    const {
      schoolId,
      schoolName,
      degreeType,
      location,
      major,
      startYear,
      endYear,
      errors,
      displayErrors,
      showUniversitySearch,
      showDegreeTypePicker,
      showStartYearPicker,
      showEndYearPicker,
      majorInputFocused,
    } = this.state

    const addEducation = () => {
      this.addEducation({
        schoolId,
        schoolName,
        degreeType,
        location,
        major,
        startYear,
        endYear,
      })
    }

    const { validateForm, addTouched } = this

    const openDegreeTypePicker = () => {
      Keyboard.dismiss()
      this.setState({
        showDegreeTypePicker: true,
        showUniversitySearch: false,
        showStartYearPicker: false,
        showEndYearPicker: false,
      })
      if (!degreeType) {
        this.setState({ degreeType: degreeTypeOptions[0].value })
      }
      this.degreePicker.showActionSheet()
    }

    const openStartYearPicker = () => {
      Keyboard.dismiss()
      this.setState({
        showDegreeTypePicker: false,
        showUniversitySearch: false,
        showStartYearPicker: true,
        showEndYearPicker: false,
      })
      if (!startYear) {
        this.setState({ startYear: createYearData()[0].value })
      }
      this.startYearPicker.showActionSheet()
    }

    const openEndYearPicker = () => {
      Keyboard.dismiss()
      this.setState({
        showDegreeTypePicker: false,
        showUniversitySearch: false,
        showStartYearPicker: false,
        showEndYearPicker: true,
      })
      if (!endYear) {
        this.setState({ endYear: createYearData()[0].value })
      }
      this.endYearPicker.showActionSheet()
    }

    const showSubmit = !errors && !majorInputFocused
    return (
      <ScreenContainer>
        <Header
          title={`Add Your Education ${nodeEmoji.get('mortar_board')}`}
          showBack
          onBackPress={() => this.props.navigation.goBack()}
          progress="79%"
        />
        <ContentContainer addPadding={showEndYearPicker || showStartYearPicker}>
          <KeyboardAwareScrollView
            ref={view => {
              this.Scroll = view
            }}
            style={{ paddingTop: 18 }}
          >
            <RegistrationPicker
              title="UNIVERSITY"
              selected={showUniversitySearch}
              onPress={() => {
                this.setState({ showUniversitySearch: true })
              }}
              text={schoolName}
              placeholderText="Search for your university"
            >
              <SearchIcon name="ios-search" size={18} />
            </RegistrationPicker>
            <RegistrationPicker
              title="Select your degree type"
              selected={showDegreeTypePicker}
              onPress={() => {
                openDegreeTypePicker()
                this.Scroll.scrollToPosition(0, 13, true)
              }}
              text={degreeType ? findLabel(degreeType, degreeTypeOptions) : ''}
              placeholderText="Select your degree type"
            />
            <RowContainer>
              <RegistrationPicker
                title="Start Year"
                width={150}
                selected={showStartYearPicker}
                onPress={() => {
                  openStartYearPicker()
                  this.addTouched('startYear')
                  this.Scroll.scrollToEnd({ animation: true })
                }}
                text={startYear}
                placeholderText="Year"
                error={displayErrors.startYear}
              />
              <RegistrationPicker
                title="Grad Year"
                width={150}
                selected={showEndYearPicker}
                onPress={() => {
                  openEndYearPicker()
                  this.addTouched('endYear')
                  this.Scroll.scrollToEnd()
                }}
                text={endYear}
                placeholderText="Year"
                error={displayErrors.endYear}
              />
            </RowContainer>
            <LineInput
              title="MAJOR"
              text={major}
              disabled={
                this.state.showDegreeTypePicker ||
                this.state.showEndYearPicker ||
                this.state.showStartYearPicker ||
                this.state.showUniversitySearch
              }
              placeholderText="Enter your major"
              updateText={text => {
                this.setState({ major: text }, () => validateForm(true))
              }}
              onFocus={() =>
                this.setState(
                  {
                    showUniversitySearch: false,
                    showDegreeTypePicker: false,
                    showStartYearPicker: false,
                    showEndYearPicker: false,
                    majorInputFocused: true,
                  },
                  () => addTouched('major'),
                )
              }
              onBlur={() =>
                this.setState({ majorInputFocused: false }, () =>
                  validateForm(false),
                )
              }
              returnKeyType="done"
              error={displayErrors.major}
            />
            <View style={{ height: 150 }} />
          </KeyboardAwareScrollView>
        </ContentContainer>
        <PickerComponent
          visible={showDegreeTypePicker}
          ref={picker => {
            this.degreePicker = picker
          }}
          options={degreeTypeOptions}
          doneOnPress={() => {
            this.setState(
              {
                showDegreeTypePicker: false,
              },
              () => validateForm(false),
            )
          }}
          onValueChange={this.updateState}
          value={degreeType}
          keyName="degreeType"
        />
        <PickerComponent
          visible={showStartYearPicker}
          ref={picker => {
            this.startYearPicker = picker
          }}
          options={createYearData()}
          doneOnPress={() => {
            this.setState({ showStartYearPicker: false }, () =>
              validateForm(false),
            )
          }}
          onValueChange={this.updateState}
          value={startYear}
          keyName="startYear"
        />
        <PickerComponent
          visible={showEndYearPicker}
          ref={picker => {
            this.endYearPicker = picker
          }}
          options={createYearData()}
          doneOnPress={() => {
            this.setState({ showEndYearPicker: false }, () =>
              validateForm(false),
            )
          }}
          onValueChange={this.updateState}
          value={endYear}
          keyName="endYear"
        />
        <SchoolSearchModal
          updateState={this.updateState}
          onDismiss={() => null}
          navigation={this.props.navigation}
          toggleSchoolModal={this.toggleSchoolModal}
          visible={this.state.showUniversitySearch}
        />
        {showSubmit && (
          <SubmitButton
            buttonText="ADD SCHOOL"
            onPress={() => {
              addEducation()
              this.props.navigation.navigate('PhotoUpload')
            }}
          />
        )}
      </ScreenContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddEducationScreen)
