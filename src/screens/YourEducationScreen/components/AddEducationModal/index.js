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

export default class AddEducationModal extends Component {
  state = {
    isCurrentEmployee: false,
  }
  render() {
    const {
      state,
      updateText,
      visible,
      toggleEducationModal,
      addEducation,
      clearState,
    } = this.props
    const {
      schoolName,
      location,
      major,
      startYear,
      graduationYear,
      isCurrentEmployee,
    } = state
    const toggleSwitch = () => {
      updateText({
        isCurrentEmployee: !isCurrentEmployee,
        graduationYear: !isCurrentEmployee ? null : undefined,
      })
    }
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
                updateText={text => updateText({ graduationYear: text })}
                text={
                  graduationYear === null || isCurrentEmployee === true
                    ? 'Present'
                    : graduationYear
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
        </ScreenContainer>
      </RightModal>
    )
  }
}
