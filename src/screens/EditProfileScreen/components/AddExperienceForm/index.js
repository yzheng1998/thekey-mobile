import React, { Component } from 'react'
import {
  Screen,
  Block,
  RowContainer,
  Title,
  Input,
  DoneButton,
  DoneButtonText,
} from '../../styles'

export default class AddExperienceForm extends Component {
  constructor(props) {
    super(props)
    const formElements = this.props.navigation.getParam('formElements')
    this.state = {
      companyName: formElements ? formElements.companyName : null,
      position: formElements ? formElements.position : null,
      startYear: formElements ? formElements.startYear : null,
      endYear: formElements ? formElements.endYear : null,
      id: formElements ? formElements.id : null,
    }
  }

  updateText = obj => {
    this.setState(obj)
  }

  editMode = this.props.navigation.getParam('editMode')

  render() {
    const { companyName, position, startYear, endYear, id } = this.state
    return (
      <Screen>
        <DoneButton
          onPress={() => {
            const experienceItem = {
              companyName,
              position,
              startYear,
              endYear,
              id,
            }
            const addExperience = this.props.navigation.getParam(
              'addExperience',
            )
            addExperience(experienceItem)
            this.props.navigation.navigate('EditProfile')
          }}
        >
          <DoneButtonText>{this.editMode ? 'Save' : 'Add'}</DoneButtonText>
        </DoneButton>
        <Block>
          <RowContainer>
            <Title>Company Name</Title>
            <Input
              value={companyName}
              placeholder="The Key"
              onChangeText={text => this.setState({ companyName: text })}
            />
          </RowContainer>
          <RowContainer>
            <Title>Position</Title>
            <Input
              value={position}
              placeholder="Software Engineer"
              onChangeText={text => this.setState({ position: text })}
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
              value={endYear}
              placeholder="2022"
              onChangeText={text => this.setState({ endYear: text })}
            />
          </RowContainer>
        </Block>
      </Screen>
    )
  }
}
