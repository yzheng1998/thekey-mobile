import React, { Component } from 'react'
import { Screen, Block } from '../../styles'
import {
  ButtonContainer,
  DateInputRow,
  OptionsInputContainer,
  OptionsPlaceholder,
  OptionsText,
} from './styles'
import PickerComponent from '../../../../components/PickerComponent'
import AddEducationButton from './components/AddEducationButton'
import UpdateEducationButton from './components/UpdateEducationButton'
import DeleteEducationButton from './components/DeleteEducationButton'
import Header from '../Header'
import LineInput from '../../../../components/LineInput'
import _ from 'lodash'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import Error from '../../../../components/Error'
import constraints from './constraints'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from 'moment'
import SchoolSearchModal from '../../../../components/SchoolSearchModal'

const validate = require('validate.js')

const schoolTypes = [
  { label: 'Secondary', value: 'SECONDARY' },
  { label: 'Undergraduate', value: 'UNDERGRADUATE' },
  { label: 'Graduate', value: 'GRADUATE' },
]

const formatYear = date => {
  if (date) return moment(new Date(date)).format('YYYY')
  return ''
}

export default class AddEducationForm extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    const formElements = this.props.navigation.getParam('formElements')
    const educationInfo = _.pick(formElements, [
      'schoolName',
      'schoolType',
      'degreeType',
      'major',
      'startYear',
      'endYear',
      'id',
    ])

    this.state = {
      ...educationInfo,
      showSchoolSearchModal: false,
      startYear: formatYear(educationInfo.startYear),
      endYear: formatYear(educationInfo.endYear),
      schoolTypePickerEnabled: false,
      schoolNameClicked: false,
      optionsInputSelected: false,
      optionsInputClicked: false,
      displayErrors: {},
      errors: {},
      touched: {},
    }
  }

  toggleEducationModal = () => {
    this.setState({ showAddEducationModal: !this.state.showAddEducationModal })
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        schoolName: this.state.schoolName,
        schoolType: this.state.schoolType,
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

  editMode = this.props.navigation.getParam('editMode')

  toggleSchoolModal = () => {
    this.setState({
      schoolNameClicked: true,
      schoolNameSelected: !this.state.schoolNameSelected,
      showSchoolSearchModal: !this.state.showSchoolSearchModal,
    })
  }

  renderSelectedOption = optionsInputSelected => {
    // if a selection has been made, change text from placeholder
    if (optionsInputSelected || this.editMode)
      return (
        <OptionsText>
          {this.state.schoolType &&
            schoolTypes.find(el => el.value === this.state.schoolType).label}
        </OptionsText>
      )
    return <OptionsPlaceholder>School Type</OptionsPlaceholder>
  }

  renderSchoolName = optionsInputSelected => {
    // if a selection has been made, change text from placeholder
    if (optionsInputSelected || this.editMode)
      return <OptionsText>{this.state.schoolName}</OptionsText>
    return <OptionsPlaceholder>School Name</OptionsPlaceholder>
  }

  render() {
    const {
      id,
      schoolName,
      schoolType,
      degreeType,
      major,
      startYear,
      endYear,
      optionsInputSelected,
      optionsInputClicked,
      schoolNameClicked,
      schoolNameSelected,
    } = this.state

    const returnKeyType = this.editMode ? 'done' : 'next'

    const noErrors = !this.state.errors

    const openSchoolTypePicker = () => {
      Keyboard.dismiss()
      this.addTouched('schoolType')
      if (!this.state.schoolType) {
        this.setState({ schoolType: schoolTypes[0].value })
      }
      this.setState({
        schoolTypePickerEnabled: true,
        optionsInputSelected: true,
        optionsInputClicked: true,
      })
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <Screen>
          <KeyboardAwareScrollView zIndex={-1}>
            <Header
              onBackPress={() => this.props.navigation.goBack()}
              showBack
              title={this.editMode ? 'Edit School' : 'Education'}
            />
            <Block>
              <View>
                <OptionsInputContainer
                  selected={schoolNameSelected}
                  onPress={this.toggleSchoolModal}
                >
                  {this.renderSchoolName(schoolNameClicked)}
                </OptionsInputContainer>
                <Error error={this.state.displayErrors.schoolName} />
              </View>
              <View>
                <OptionsInputContainer
                  selected={optionsInputClicked}
                  onPress={openSchoolTypePicker}
                >
                  {this.renderSelectedOption(optionsInputSelected)}
                </OptionsInputContainer>
                <Error error={this.state.displayErrors.schoolType} />
              </View>
              <LineInput
                ref={degreeInput => {
                  this.degreeInput = degreeInput
                }}
                text={degreeType}
                placeholderText="Degree Type"
                updateText={text => {
                  this.setState({ degreeType: text }, () =>
                    this.validateForm(true),
                  )
                }}
                onFocus={() => this.addTouched('degreeType')}
                onBlur={() => this.validateForm(false)}
                returnKeyType={returnKeyType}
                onSubmitEditing={() => {
                  if (!this.editMode) this.majorInput.focus()
                }}
                error={this.state.displayErrors.degreeType}
              />
              <LineInput
                ref={majorInput => {
                  this.majorInput = majorInput
                }}
                text={major}
                placeholderText="Field of Study"
                updateText={text => {
                  this.setState({ major: text }, () => this.validateForm(true))
                }}
                onFocus={() => this.addTouched('major')}
                onBlur={() => this.validateForm(false)}
                returnKeyType={returnKeyType}
                onSubmitEditing={() => {
                  if (!this.editMode) this.startYearInput.focus()
                }}
                error={this.state.displayErrors.major}
              />
              <DateInputRow>
                <LineInput
                  ref={startYearInput => {
                    this.startYearInput = startYearInput
                  }}
                  text={startYear}
                  placeholderText="Start Year"
                  updateText={text => {
                    this.setState({ startYear: text }, () =>
                      this.validateForm(true),
                    )
                  }}
                  onFocus={() => this.addTouched('startYear')}
                  onBlur={() => this.validateForm(false)}
                  returnKeyType={returnKeyType}
                  onSubmitEditing={() => {
                    if (!this.editMode) this.endYearInput.focus()
                  }}
                  error={this.state.displayErrors.startYear}
                />
                <LineInput
                  ref={endYearInput => {
                    this.endYearInput = endYearInput
                  }}
                  text={endYear}
                  placeholderText="Graduation Year"
                  updateText={text => {
                    this.setState({ endYear: text }, () =>
                      this.validateForm(true),
                    )
                  }}
                  onFocus={() => this.addTouched('endYear')}
                  onBlur={() => this.validateForm(false)}
                  error={this.state.displayErrors.endYear}
                />
              </DateInputRow>
              <ButtonContainer>
                {this.editMode && (
                  <View>
                    <UpdateEducationButton
                      refreshEditProfile={this.props.navigation.getParam(
                        'refreshData',
                      )}
                      disabled={!noErrors}
                      id={id}
                      schoolName={schoolName}
                      schoolType={schoolType}
                      degreeType={degreeType}
                      major={major}
                      startYear={startYear}
                      endYear={endYear}
                      navigation={this.props.navigation}
                    />
                    <DeleteEducationButton
                      refreshDeleteEducation={this.props.navigation.getParam(
                        'refreshData',
                      )}
                      navigation={this.props.navigation}
                      id={id}
                    />
                  </View>
                )}
                {!this.editMode && (
                  <AddEducationButton
                    refreshAddEducation={this.props.navigation.getParam(
                      'refreshData',
                    )}
                    disabled={!noErrors}
                    schoolName={schoolName}
                    schoolType={schoolType}
                    degreeType={degreeType}
                    major={major}
                    startYear={startYear}
                    endYear={endYear}
                    navigation={this.props.navigation}
                  />
                )}
              </ButtonContainer>
            </Block>
          </KeyboardAwareScrollView>
          {this.state.schoolTypePickerEnabled && (
            <PickerComponent
              options={schoolTypes}
              doneOnPress={() => {
                this.setState({
                  schoolTypePickerEnabled: false,
                  optionsInputClicked: false, // handles border color of optionsInput
                })
                this.validateForm(false)
                if (!this.editMode) this.degreeInput.focus()
              }}
              onValueChange={this.updateState}
              validateForm={this.validateForm}
              value={schoolType}
              keyName="schoolType"
            />
          )}
          <SchoolSearchModal
            updateState={this.updateState}
            navigation={this.props.navigation}
            toggleSchoolModal={this.toggleSchoolModal}
            visible={this.state.showSchoolSearchModal}
          />
        </Screen>
      </TouchableWithoutFeedback>
    )
  }
}
