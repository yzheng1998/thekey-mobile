import React, { Component } from 'react'
import { Screen, Block } from '../../styles'
import {
  RowContainer,
  ButtonContainer,
  SwitchLabel,
  SwitchContainer,
} from './styles'
import LineInput from '../../../../components/LineInput'
import AddExperienceButton from './components/AddExperienceButton'
import UpdateExperienceButton from './components/UpdateExperienceButton'
import DeleteExperienceButton from './components/DeleteExperienceButton'
import Header from '../Header'
import { Switch, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import _ from 'lodash'
import constraints from './constraints'
import RegistrationPicker from '../../../../components/RegistrationPicker'
/* eslint-disable */
import DatePicker from '../../../../components/DatePicker/DatePicker/'
/* eslint-enable */

const validate = require('validate.js')

const moment = require('moment')

const format = 'MMM YYYY'
validate.extend(validate.validators.datetime, {
  format: value => value.format(format),
  parse: value => moment(value, format, true),
})

export default class AddExperienceForm extends Component {
  constructor(props) {
    super(props)
    const formElements = this.props.navigation.getParam('formElements')
    const experienceInfo = _.pick(formElements, [
      'employer',
      'position',
      'startDate',
      'endDate',
      'id',
    ])
    this.state = {
      ...experienceInfo,
      startDate: experienceInfo.startDate,
      endDate: experienceInfo.endDate,
      isCurrentEmployee: experienceInfo.endDate === null,
      displayErrors: {},
      errors: null,
      touched: {},
      showStartDate: false,
      showEndDate: false,
    }
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        employer: this.state.employer,
        position: this.state.position,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
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

  render() {
    const {
      employer,
      position,
      startDate,
      endDate,
      isCurrentEmployee,
      id,
      showStartDate,
      showEndDate,
      errors,
      displayErrors,
    } = this.state

    const endDateIsPresent = endDate === null || isCurrentEmployee === true

    const returnKeyType = this.editMode ? 'done' : 'next'

    const noErrors = !errors

    const toggleSwitch = () => {
      this.setState({
        isCurrentEmployee: !isCurrentEmployee,
        endDate: !isCurrentEmployee ? null : undefined,
      })
    }

    const formattedEndDate = endDate
      ? moment(new Date(endDate)).format('MMM D, YYYY')
      : ''

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Screen>
          <KeyboardAwareScrollView zIndex={-1}>
            <Header
              onBackPress={() => this.props.navigation.goBack()}
              showBack
              title={this.editMode ? 'Edit Work Experience' : 'Work Experience'}
            />
            <Block>
              <LineInput
                text={employer}
                placeholderText="Company"
                updateText={text => {
                  this.setState({ employer: text }, () =>
                    this.validateForm(true),
                  )
                }}
                onFocus={() => this.addTouched('employer')}
                onBlur={() => this.validateForm(false)}
                returnKeyType={returnKeyType}
                onSubmitEditing={() => {
                  if (!this.editMode && !position) this.positionInput.focus()
                }}
                error={displayErrors.employer}
                disabled={showEndDate || showStartDate}
              />
              <LineInput
                ref={positionInput => {
                  this.positionInput = positionInput
                }}
                text={position}
                placeholderText="Position"
                updateText={text => {
                  this.setState({ position: text }, () =>
                    this.validateForm(true),
                  )
                }}
                onFocus={() => this.addTouched('position')}
                onBlur={() => this.validateForm(false)}
                returnKeyType={returnKeyType}
                error={displayErrors.position}
                onSubmitEditing={() => {
                  if (!this.editMode && !startDate)
                    this.setState({ showStartDate: true })
                }}
                disabled={showEndDate || showStartDate}
              />
              <SwitchContainer>
                <SwitchLabel>I am currently working here</SwitchLabel>
                <Switch
                  onValueChange={toggleSwitch}
                  value={isCurrentEmployee}
                  onTintColor="rgb(220, 60, 53)"
                />
              </SwitchContainer>
              <RowContainer>
                <RegistrationPicker
                  selected={showStartDate}
                  disabled={showEndDate}
                  onPress={() => {
                    this.setState({
                      showStartDate: true,
                      startDate,
                    })
                    this.startDatePicker.openDatePicker()
                  }}
                  text={
                    startDate
                      ? moment(new Date(startDate)).format('MMM D, YYYY')
                      : ''
                  }
                  placeholderText="Start date"
                />
                <RegistrationPicker
                  selected={showEndDate}
                  disabled={showStartDate}
                  onPress={() => {
                    this.setState({
                      showEndDate: true,
                      endDate,
                    })
                    this.endDatePicker.openDatePicker()
                  }}
                  text={endDateIsPresent ? 'Present' : formattedEndDate}
                  placeholderText="End date"
                />
              </RowContainer>
              <ButtonContainer>
                {this.editMode && (
                  <View>
                    <UpdateExperienceButton
                      disabled={!noErrors}
                      refreshUpdateExperience={this.props.navigation.getParam(
                        'refreshData',
                      )}
                      id={id}
                      employer={employer}
                      position={position}
                      startDate={startDate}
                      endDate={endDate}
                      navigation={this.props.navigation}
                    />
                    <DeleteExperienceButton
                      refreshDeleteExperience={this.props.navigation.getParam(
                        'refreshData',
                      )}
                      navigation={this.props.navigation}
                      id={id}
                    />
                  </View>
                )}
                {!this.editMode && (
                  <AddExperienceButton
                    disabled={!noErrors}
                    refreshAddExperience={this.props.navigation.getParam(
                      'refreshData',
                    )}
                    employer={employer}
                    position={position}
                    startDate={startDate}
                    endDate={endDate}
                    navigation={this.props.navigation}
                  />
                )}
              </ButtonContainer>
            </Block>
          </KeyboardAwareScrollView>
          <DatePicker
            ref={datePicker => {
              this.startDatePicker = datePicker
            }}
            visible={showStartDate}
            mode="date"
            date={new Date(startDate) || new Date(1996, 0, 1)}
            doneOnPress={() => {
              this.setState({ showStartDate: false })
              if (!isCurrentEmployee && !endDate) {
                this.setState({ showEndDate: true })
              }
              this.validateForm(true)
            }}
            setDate={date => {
              this.setState({
                startDate: date,
              })
            }}
          />
          <DatePicker
            ref={datePicker => {
              this.endDatePicker = datePicker
            }}
            visible={showEndDate}
            mode="date"
            date={new Date(endDate) || new Date(1996, 0, 1)}
            doneOnPress={() => {
              this.setState({
                showEndDate: false,
              })
            }}
            setDate={date => {
              this.setState({
                endDate: date,
              })
            }}
          />
        </Screen>
      </TouchableWithoutFeedback>
    )
  }
}
