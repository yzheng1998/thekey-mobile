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
import PickerComponent from '../../../../components/PickerComponent'
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
        'graudationYear',
        'id',
      ]),
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
              schoolType: schoolType.toUpperCase(),
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
                  schoolTypePickerEnabled: true,
                })
              }
            >
              <PickerText>{schoolType}</PickerText>
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
            value={schoolType}
            keyName="schoolType"
          />
        )}
      </Screen>
    )
  }
}
