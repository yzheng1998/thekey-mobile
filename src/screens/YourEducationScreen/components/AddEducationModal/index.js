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
    const openSchoolTypePicker = () => {
      Keyboard.dismiss()
      this.setState({ showSchoolTypePicker: true })
      if (!schoolType) {
        updateText({ schoolType: schoolTypeOptions[0].value })
      }
      this.picker.showActionSheet()
    }
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
          <KeyboardAwareScrollView style={{ paddingTop: 18 }}>
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
              disabled={this.state.showSchoolTypePicker}
              placeholderText="What did you study?"
              updateText={text => {
                updateText({ major: text }, () => validateForm(true))
              }}
              onFocus={() => addTouched('major')}
              onBlur={() => validateForm(false)}
              onSubmitEditing={openSchoolTypePicker}
              returnKeyType="next"
              error={displayErrors.major}
            />
            <RegistrationPicker
              selected={showSchoolTypePicker}
              onPress={openSchoolTypePicker}
              text={schoolType ? findLabel(schoolType) : ''}
              placeholderText="What type of school did you attend?"
            />
            <LineInput
              ref={degreeInput => {
                this.degreeInput = degreeInput
              }}
              text={degreeType}
              placeholderText="Degree type"
              updateText={text => {
                updateText({ degreeType: text }, () => validateForm(true))
              }}
              onFocus={() => addTouched('degreeType')}
              onBlur={() => validateForm(false)}
              onSubmitEditing={() => this.startYearInput.focus()}
              returnKeyType="next"
              error={displayErrors.degreeType}
              disabled={this.state.showSchoolTypePicker}
            />
            <RowContainer>
              <LineInput
                ref={startYearInput => {
                  this.startYearInput = startYearInput
                }}
                disabled={this.state.showSchoolTypePicker}
                width="48%"
                text={startYear}
                placeholderText="Start Year"
                updateText={text => {
                  updateText({ startYear: text }, () => validateForm(true))
                }}
                onFocus={() => addTouched('startYear')}
                onBlur={() => validateForm(false)}
                onSubmitEditing={() => this.endYearInput.focus()}
                returnKeyType="next"
                error={displayErrors.startYear}
              />
              <LineInput
                ref={endYearInput => {
                  this.endYearInput = endYearInput
                }}
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
                returnKeyType="done"
                error={displayErrors.endYear}
                disabled={this.state.showSchoolTypePicker}
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
        </ScreenContainer>
        <PickerComponent
          visible={showSchoolTypePicker}
          ref={picker => {
            this.picker = picker
          }}
          options={schoolTypeOptions}
          doneOnPress={() => {
            this.setState(
              {
                showSchoolTypePicker: false,
              },
              () => this.degreeInput.focus(),
            )
          }}
          onValueChange={updateText}
          value={schoolType}
          keyName="schoolType"
        />
      </RightModal>
    )
  }
}
