import React, { Component } from 'react'
import {
  Screen,
  Block,
  RowContainer,
  Title,
  Input,
  DoneButton,
  DoneButtonText,
  PickerButton,
  PickerText,
} from '../../styles'
import PickerComponent from '../PickerComponent'

const schoolTypes = ['Secondary', 'Undergraduate', 'Graduate']

export default class AddEducationForm extends Component {
  formElements = this.props.navigation.getParam('formElements')
  editMode = this.props.navigation.getParam('editMode')

  state = {
    schoolName: this.formElements ? this.formElements.schoolName : null,
    schoolType: this.formElements ? this.formElements.schoolType : null,
    degreeType: this.formElements ? this.formElements.degreeType : null,
    major: this.formElements ? this.formElements.major : null,
    startYear: this.formElements ? this.formElements.startYear : null,
    graduationYear: this.formElements ? this.formElements.graduationYear : null,
    id: this.formElements ? this.formElements.id : null,
    schoolTypePickerEnabled: false,
  }

  updateText = obj => {
    this.setState(obj)
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
    } = this.state
    return (
      <Screen>
        <DoneButton
          onPress={() => {
            const educationItem = {
              schoolName,
              schoolType,
              degreeType,
              major,
              startYear,
              graduationYear,
              id,
            }
            const addEducation = this.props.navigation.getParam('addEducation')
            addEducation(educationItem)
            this.props.navigation.navigate('EditProfile')
          }}
        >
          <DoneButtonText>{this.editMode ? 'Save' : 'Add'}</DoneButtonText>
        </DoneButton>
        <Block>
          <RowContainer>
            <Title>School Name</Title>
            <Input
              value={schoolName}
              placeholder="Harvard University"
              onChangeText={schoolName => this.setState({ schoolName })}
            />
          </RowContainer>
          <RowContainer>
            <Title>School Type</Title>
            <PickerButton
              onPress={() =>
                this.setState({
                  schoolType: schoolTypes[0],
                  schoolTypePickerEnabled: true,
                })
              }
            >
              <PickerText>{this.state.schoolType}</PickerText>
            </PickerButton>
          </RowContainer>
          <RowContainer>
            <Title>Degree Type</Title>
            <Input
              value={degreeType}
              placeholder="Bachlor's Degree"
              onChangeText={degreeType => this.setState({ degreeType })}
            />
          </RowContainer>
          <RowContainer>
            <Title>Field of Study</Title>
            <Input
              value={major}
              placeholder="Chemistry"
              onChangeText={major => this.setState({ major })}
            />
          </RowContainer>
          <RowContainer>
            <Title>Start Year</Title>
            <Input
              value={startYear}
              placeholder="2018"
              onChangeText={startYear => this.setState({ startYear })}
            />
            <Title>End Year</Title>
            <Input
              value={graduationYear}
              placeholder="2022"
              onChangeText={graduationYear => this.setState({ graduationYear })}
            />
          </RowContainer>
        </Block>
        {this.state.schoolTypePickerEnabled && (
          <PickerComponent
            options={schoolTypes}
            doneOnPress={() => {
              this.setState({
                schoolTypePickerEnabled: false,
              })
            }}
            onValueChange={this.updateText}
            value={this.state.schoolType}
            keyName="schoolType"
          />
        )}
      </Screen>
    )
  }
}
