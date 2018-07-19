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
import LineInput from '../../../../components/LineInput'
import _ from 'lodash'

const schoolTypes = [
  { label: 'Secondary', value: 'SECONDARY' },
  { label: 'Undergraduate', value: 'UNDERGRADUATE' },
  { label: 'Graduate', value: 'GRADUATE' },
]

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
        'endYear',
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
    if (optionsInputSelected || this.editMode)
      return <OptionsText>{this.state.schoolType}</OptionsText>
    return <OptionsPlaceholder>School Type</OptionsPlaceholder>
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
              text={endYear}
              placeholderText="Graduation Date"
              width="48%"
              updateText={text => this.updateText('endYear', text)}
            />
          </DateInputRow>
          <ButtonContainer>
            {this.editMode ? (
              <UpdateEducationButton
                refreshEditProfile={this.props.navigation.getParam(
                  'refreshData',
                )}
                id={id}
                schoolName={schoolName}
                schoolType={schoolType}
                degreeType={degreeType}
                major={major}
                startYear={startYear}
                endYear={endYear}
                navigation={this.props.navigation}
              />
            ) : (
              <AddEducationButton
                refreshAddEducation={this.props.navigation.getParam(
                  'refreshData',
                )}
                schoolName={schoolName}
                schoolType={schoolType}
                degreeType={degreeType}
                major={major}
                startYear={startYear}
                endYear={endYear}
                navigation={this.props.navigation}
              />
            )}
            <DeleteEducationButton
              refreshDeleteEducation={this.props.navigation.getParam(
                'refreshData',
              )}
              navigation={this.props.navigation}
              id={id}
            />
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
