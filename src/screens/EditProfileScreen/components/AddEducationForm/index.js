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
  constructor(props) {
    super(props)
    const formElements = this.props.navigation.getParam('formElements')
    this.state = {
      schoolName: formElements ? formElements.schoolName : null,
      schoolType: formElements ? formElements.schoolType : null,
      degreeType: formElements ? formElements.degreeType : null,
      major: formElements ? formElements.major : null,
      startYear: formElements ? formElements.startYear : null,
      graduationYear: formElements ? formElements.graduationYear : null,
      id: formElements ? formElements.id : null,
      schoolTypePickerEnabled: false,
    }
  }

  updateText = obj => {
    this.setState(obj)
  }

  editMode = this.props.navigation.getParam('editMode')

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
              onChangeText={text => this.setState({ schoolName: text })}
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
              onChangeText={text => this.setState({ degreeType: text })}
            />
          </RowContainer>
          <RowContainer>
            <Title>Field of Study</Title>
            <Input
              value={major}
              placeholder="Chemistry"
              onChangeText={text => this.setState({ major: text })}
            />
          </RowContainer>
          <RowContainer>
            <Title>Start Year</Title>
            <Input
              value={startYear}
              placeholder="2018"
              onChangeText={text => this.setState({ startYear: text })}
            />
            <Title>End Year</Title>
            <Input
              value={graduationYear}
              placeholder="2022"
              onChangeText={text => this.setState({ graduationYear: text })}
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
