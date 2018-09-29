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
    showStartYearPicker: false,
    showEndYearPicker: false,
  }

  createYearData = () => {
    const yearArray = []
    for (let i = new Date().getFullYear(); i >= 1970; i -= 1) {
      yearArray.push({ label: i.toString(), value: i.toString() })
    }
    return yearArray
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
      handleEducationChange,
    } = this.props
    const {
      schoolName,
      schoolType,
      degreeType,
      location,
      major,
      startYear,
      endYear,
      errors,
      displayErrors,
    } = state

    const { showStartYearPicker, showEndYearPicker } = this.state

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
              onSubmitEditing={() =>
                this.setState({ showStartYearPicker: true })
              }
              returnKeyType="next"
              error={displayErrors.degreeType}
              disabled={this.state.showSchoolTypePicker}
            />
            <RowContainer>
              <RegistrationPicker
                selected={showStartYearPicker}
                onPress={() => {
                  this.setState({ showStartYearPicker: true })
                }}
                text={startYear}
                placeholderText="Start year"
              />
              <RegistrationPicker
                selected={showEndYearPicker}
                onPress={() => {
                  this.setState({ showEndYearPicker: true })
                }}
                text={endYear}
                placeholderText="End year"
              />
            </RowContainer>
            <RegisterButton
              buttonText="ADD SCHOOL"
              onPress={() => {
                addEducation()
                handleEducationChange()
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
        <PickerComponent
          visible={showStartYearPicker}
          ref={picker => {
            this.startYearPicker = picker
          }}
          options={this.createYearData()}
          doneOnPress={() => {
            this.setState(
              { showStartYearPicker: false, showEndYearPicker: true },
              () => validateForm(false),
            )
          }}
          onValueChange={updateText}
          value={startYear}
          keyName="startYear"
        />
        <PickerComponent
          visible={showEndYearPicker}
          ref={picker => {
            this.endYearPicker = picker
          }}
          options={this.createYearData()}
          doneOnPress={() => {
            this.setState({ showEndYearPicker: false }, () =>
              validateForm(false),
            )
          }}
          onValueChange={updateText}
          value={endYear}
          keyName="endYear"
        />
      </RightModal>
    )
  }
}
