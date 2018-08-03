import React, { Component } from 'react'
import { Keyboard } from 'react-native'
import { ScreenContainer, Subtitle, RightModal, RowContainer } from './styles'
import Header from '../../../../components/Header'
import LineInput from '../../../../components/LineInput'
import RegisterButton from '../../../../components/RegisterButton'
import RegistrationPicker from '../../../../components/RegistrationPicker'
import PickerComponent from '../../../../components/PickerComponent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
      validateForm,
      addTouched,
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
      errors,
      displayErrors,
    } = state

    const { showSchoolTypePicker } = this.state
    const findLabel = value =>
      schoolTypeOptions.find(el => el.value === value).label
    const noErrors = !errors
    return (
      <RightModal
        isVisible={visible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
      >
        <ScreenContainer>
          <KeyboardAwareScrollView>
            <Header
              title={schoolName}
              showBack
              onBackPress={() => {
                toggleEducationModal()
                clearState()
              }}
            >
              <Subtitle>{location}</Subtitle>
            </Header>
            <LineInput
              text={major}
              placeholderText="What did you study?"
              updateText={text => {
                updateText({ major: text }, () => validateForm(true))
              }}
              onFocus={() => addTouched('major')}
              onBlur={() => validateForm(false)}
              error={displayErrors.major}
            />
            <RegistrationPicker
              selected={showSchoolTypePicker}
              onPress={() => {
                Keyboard.dismiss()
                this.setState({ showSchoolTypePicker: true })
                if (!schoolType) {
                  updateText({ schoolType: schoolTypeOptions[0].value })
                }
              }}
              text={schoolType ? findLabel(schoolType) : ''}
              placeholderText="What type of school did you attend?"
            />
            <LineInput
              text={degreeType}
              placeholderText="Degree type"
              updateText={text => {
                updateText({ degreeType: text }, () => validateForm(true))
              }}
              onFocus={() => addTouched('degreeType')}
              onBlur={() => validateForm(false)}
              error={displayErrors.degreeType}
            />
            <RowContainer>
              <LineInput
                width="48%"
                text={startYear}
                placeholderText="Start Year"
                updateText={text => {
                  updateText({ startYear: text }, () => validateForm(true))
                }}
                onFocus={() => addTouched('startYear')}
                onBlur={() => validateForm(false)}
                error={displayErrors.startYear}
              />
              <LineInput
                text={
                  endYear === null || isCurrentEmployee === true
                    ? 'Present'
                    : endYear
                }
                width="48%"
                placeholderText="Graduation Year"
                updateText={text => {
                  updateText({ endYear: text }, () => validateForm(true))
                }}
                onFocus={() => addTouched('endYear')}
                onBlur={() => validateForm(false)}
                error={displayErrors.endYear}
              />
            </RowContainer>
            <RegisterButton
              buttonText="ADD SCHOOL"
              onPress={() => {
                addEducation()
                toggleEducationModal()
                clearState()
              }}
              disabled={!noErrors}
            />
          </KeyboardAwareScrollView>
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
