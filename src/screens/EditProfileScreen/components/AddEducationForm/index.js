import React, { Component } from 'react'
import { Screen, Block } from '../../styles'
import {
  AddButton,
  AddButtonText,
  RemoveButton,
  RemoveButtonText,
  ButtonContainer,
  DateInputRow,
  OptionsInputContainer,
  OptionsPlaceholder,
  OptionsText,
} from './styles'
import PickerComponent from '../../../../components/PickerComponent'
import LineInput from '../../../../components/LineInput'
import _ from 'lodash'

const schoolTypes = ['Secondary', 'Undergraduate', 'Graduate']

export default class AddEducationForm extends Component {
  constructor(props) {
    super(props)
    const formElements = this.props.navigation.getParam('formElements')
    this.state = {
      ..._.pick(formElements, [
        'schoolName',
        'schoolType',
        'degreeType',
        'major',
        'startYear',
        'graduationYear',
        'id',
      ]),
      schoolTypePickerEnabled: false,
      optionsInputSelected: false,
      optionsInputClicked: false,
    }
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }
  updateState = obj => {
    this.setState(obj)
  }
  editMode = this.props.navigation.getParam('editMode')

  renderSelectedOption = optionsInputSelected => {
    // if a selection has been made, change text from placeholder
    if (optionsInputSelected)
      return <OptionsText>{this.state.schoolType}</OptionsText>
    return <OptionsPlaceholder>School Type</OptionsPlaceholder>
  }

  render() {
    const {
      schoolName,
      schoolType,
      degreeType,
      major,
      startYear,
      graduationYear,
      id,
      optionsInputSelected,
      optionsInputClicked,
    } = this.state
    return (
      <Screen>
        <Block>
          <LineInput
            text={schoolName}
            placeholderText="School Name"
            updateText={text => this.updateText('schoolName', text)}
          />
          <OptionsInputContainer
            selected={optionsInputClicked}
            onPress={() =>
              this.setState({
                schoolTypePickerEnabled: true,
                optionsInputSelected: true,
                optionsInputClicked: true,
              })
            }
          >
            {this.renderSelectedOption(optionsInputSelected)}
          </OptionsInputContainer>
          <LineInput
            text={degreeType}
            placeholderText="Degree Type"
            updateText={text => this.updateText('degreeType', text)}
          />
          <LineInput
            text={major}
            placeholderText="Field of Study"
            updateText={text => this.updateText('major', text)}
          />
          <DateInputRow>
            <LineInput
              text={startYear}
              placeholderText="Start Date"
              width="48%"
              updateText={text => this.updateText('startYear', text)}
            />
            <LineInput
              text={graduationYear}
              placeholderText="Graduation Date"
              width="48%"
              updateText={text => this.updateText('graduationYear', text)}
            />
          </DateInputRow>
          <ButtonContainer>
            <AddButton
              onPress={() => {
                const educationItem = {
                  schoolName,
                  schoolType: schoolType.toUpperCase(),
                  degreeType,
                  major,
                  startYear,
                  graduationYear,
                  id,
                }
                const addEducation = this.props.navigation.getParam(
                  'addEducation',
                )
                addEducation(educationItem)
                this.props.navigation.navigate('EditProfile')
              }}
            >
              <AddButtonText>
                {this.editMode ? 'UPDATE SCHOOL' : 'ADD SCHOOL'}
              </AddButtonText>
            </AddButton>
            <RemoveButton
              onPress={() => {
                this.props.navigation.navigate('EditProfile')
              }}
            >
              <RemoveButtonText>REMOVE SCHOOL</RemoveButtonText>
            </RemoveButton>
          </ButtonContainer>
        </Block>
        {this.state.schoolTypePickerEnabled && (
          <PickerComponent
            options={schoolTypes}
            doneOnPress={() => {
              this.setState({
                schoolTypePickerEnabled: false,
                optionsInputClicked: false, // handles border color of optionsInput
              })
            }}
            onValueChange={this.updateState}
            value={schoolType}
            keyName="schoolType"
          />
        )}
      </Screen>
    )
  }
}
