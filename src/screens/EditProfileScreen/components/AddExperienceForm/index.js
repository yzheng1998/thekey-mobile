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

const validate = require('validate.js')

const moment = require('moment')

const format = 'MMM YYYY'
validate.extend(validate.validators.datetime, {
  format: value => value.format(format),
  parse: value => moment(value, format, true),
})

const formatDate = date => {
  if (date) return moment(new Date(date)).format('MMM YYYY')
  return ''
}

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
      startDate: formatDate(experienceInfo.startDate),
      endDate: formatDate(experienceInfo.endDate),
      isCurrentEmployee: experienceInfo.endDate === null,
      displayErrors: {},
      errors: {},
      touched: {},
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
    } = this.state

    const endDateIsPresent = endDate === null || isCurrentEmployee === true

    const returnKeyType = this.editMode ? 'done' : 'next'

    const noErrors = !this.state.errors

    const toggleSwitch = () => {
      this.setState(
        {
          isCurrentEmployee: !this.state.isCurrentEmployee,
          endDate: !isCurrentEmployee ? null : undefined,
        },
        () => {
          if (!this.editMode && !startDate) {
            this.startDateInput.focus()
          }
        },
      )
    }

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
                  if (!this.editMode) this.positionInput.focus()
                }}
                error={this.state.displayErrors.employer}
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
                error={this.state.displayErrors.position}
              />
              <SwitchContainer>
                <SwitchLabel>I am currently working here</SwitchLabel>
                <Switch
                  onValueChange={toggleSwitch}
                  value={this.state.isCurrentEmployee}
                  onTintColor="rgb(250, 53, 121)"
                />
              </SwitchContainer>
              <RowContainer>
                <LineInput
                  ref={startDateInput => {
                    this.startDateInput = startDateInput
                  }}
                  text={startDate}
                  width="48%"
                  placeholderText="Start Date"
                  updateText={text => {
                    this.setState({ startDate: text }, () =>
                      this.validateForm(true),
                    )
                  }}
                  onFocus={() => this.addTouched('startDate')}
                  onBlur={() => this.validateForm(false)}
                  returnKeyType={
                    this.editMode || (!this.editMode && endDateIsPresent)
                      ? 'done'
                      : 'next'
                  }
                  onSubmitEditing={() => {
                    if (!this.editMode && !endDateIsPresent)
                      this.endDateInput.focus()
                  }}
                  error={this.state.displayErrors.startDate}
                />
                <LineInput
                  ref={endDateInput => {
                    this.endDateInput = endDateInput
                  }}
                  // if endDate is null (currentEmployee) display endDate as "Present"
                  text={endDateIsPresent ? 'Present' : endDate}
                  width="48%"
                  placeholderText="End Date"
                  updateText={text => {
                    this.setState({ endDate: text }, () =>
                      this.validateForm(true),
                    )
                  }}
                  onFocus={() => this.addTouched('endDate')}
                  onBlur={() => this.validateForm(false)}
                  error={this.state.displayErrors.endDate}
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
        </Screen>
      </TouchableWithoutFeedback>
    )
  }
}
