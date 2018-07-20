import React, { Component } from 'react'
import { KeyboardAvoidingView, Switch } from 'react-native'
import {
  ScreenContainer,
  Subtitle,
  RightModal,
  RowContainer,
  SwitchLabel,
} from './styles'
import Header from '../../../../components/Header'
import LineInput from '../../../../components/LineInput'
import RegisterButton from '../../../../components/RegisterButton'
import RegistrationPicker from '../../../../components/RegistrationPicker'
import PickerComponent from '../../../../components/PickerComponent'

export default class AddEducationModal extends Component {
  state = {
    showSchoolTypePicker: false,
  }
  render() {
    const {
      state,
      updateText,
      visible,
      toggleEducationModal,
      addEducation,
      clearState,
      schoolTypeOptions,
    } = this.props
    const {
      schoolName,
      schoolType,
      degreeType,
      location,
      major,
      startYear,
      endYear,
      isCurrentEmployee,
    } = state
    const toggleSwitch = () => {
      updateText({
        isCurrentEmployee: !isCurrentEmployee,
        endYear: !isCurrentEmployee ? null : undefined,
      })
    }
    const { showSchoolTypePicker } = this.state
    const findLabel = value =>
      schoolTypeOptions.find(el => el.value === value).label
    return (
      <RightModal
        isVisible={visible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
      >
        <ScreenContainer>
          <KeyboardAvoidingView behavior="position" enabled>
            <Header
              title={schoolName}
              showBack
              onBackPress={toggleEducationModal}
            >
              <Subtitle>{location}</Subtitle>
            </Header>
            <LineInput
              updateText={text => updateText({ major: text })}
              text={major}
              placeholderText="What did you study?"
            />
            <RegistrationPicker
              selected={showSchoolTypePicker}
              onPress={() => this.setState({ showSchoolTypePicker: true })}
              text={schoolType ? findLabel(schoolType) : ''}
              placeholderText="What type of school did you attend?"
            />
            <LineInput
              updateText={text => updateText({ degreeType: text })}
              text={degreeType}
              placeholderText="Degree type"
            />
            <RowContainer>
              <SwitchLabel>I am currently working here</SwitchLabel>
              <Switch
                onValueChange={toggleSwitch}
                value={isCurrentEmployee}
                onTintColor="rgb(250, 53, 121)"
              />
            </RowContainer>
            <RowContainer>
              <LineInput
                updateText={text => updateText({ startYear: text })}
                width="48%"
                text={startYear}
                placeholderText="Start Date"
              />
              <LineInput
                updateText={text => updateText({ endYear: text })}
                text={
                  endYear === null || isCurrentEmployee === true
                    ? 'Present'
                    : endYear
                }
                width="48%"
                placeholderText="End Date"
              />
            </RowContainer>
            <RegisterButton
              buttonText="ADD SCHOOL"
              onPress={() => {
                addEducation()
                toggleEducationModal()
                clearState()
              }}
            />
          </KeyboardAvoidingView>
          {showSchoolTypePicker && (
            <PickerComponent
              options={schoolTypeOptions}
              doneOnPress={() => {
                this.setState({
                  showSchoolTypePicker: false,
                })
              }}
              onValueChange={updateText}
              value={schoolType}
              keyName="schoolType"
            />
          )}
        </ScreenContainer>
      </RightModal>
    )
  }
}
