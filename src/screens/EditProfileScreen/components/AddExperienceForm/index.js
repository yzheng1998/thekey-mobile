import React, { Component } from 'react'
import { Screen, Block } from '../../styles'
import {
  RowContainer,
  AddButton,
  AddButtonText,
  RemoveButton,
  RemoveButtonText,
  ButtonContainer,
  SwitchLabel,
} from './styles'
import LineInput from '../../../../components/LineInput'
import { Switch } from 'react-native'
import _ from 'lodash'

export default class AddExperienceForm extends Component {
  constructor(props) {
    super(props)
    const formElements = this.props.navigation.getParam('formElements')
    this.state = _.pick(formElements, [
      'companyName',
      'position',
      'startDate',
      'endDate',
      'isCurrentEmployee',
      'id',
    ])
  }

  // functions to update state
  updateCompanyName = text => {
    this.setState({ companyName: text })
  }
  updatePosition = text => {
    this.setState({ position: text })
  }
  updateStartDate = text => {
    this.setState({ startDate: text })
  }
  updateEndDate = text => {
    this.setState({ endDate: text })
  }

  editMode = this.props.navigation.getParam('editMode')

  render() {
    const {
      companyName,
      position,
      startDate,
      endDate,
      isCurrentEmployee,
      id,
    } = this.state
    const disabled = !(companyName && position && startDate && endDate)
    return (
      <Screen>
        <Block>
          <LineInput
            text={companyName}
            placeholderText="Company Name"
            updateText={text => this.updateCompanyName(text)}
          />
          <LineInput
            text={position}
            placeholderText="Position"
            updateText={text => this.updatePosition(text)}
          />
          <RowContainer>
            <SwitchLabel>I am currently working here</SwitchLabel>
            <Switch
              onValueChange={() =>
                this.setState({
                  isCurrentEmployee:
                    isCurrentEmployee === undefined ? true : !isCurrentEmployee,
                  endDate: 'Present',
                })
              }
              value={isCurrentEmployee}
              onTintColor="rgb(250, 53, 121)"
            />
          </RowContainer>
          <RowContainer>
            <LineInput
              text={startDate}
              width="48%"
              placeholderText="Start Date"
              updateText={text => this.updateStartDate(text)}
            />
            <LineInput
              text={endDate}
              width="48%"
              placeholderText="End Date"
              updateText={text => this.updateEndDate(text)}
            />
          </RowContainer>
          <ButtonContainer>
            <AddButton
              disabled={disabled}
              onPress={() => {
                const experienceItem = {
                  companyName,
                  position,
                  startDate,
                  endDate,
                  isCurrentEmployee,
                  id,
                }
                const addExperience = this.props.navigation.getParam(
                  'addExperience',
                )
                addExperience(experienceItem)
                this.props.navigation.navigate('EditProfile')
              }}
            >
              <AddButtonText>UPDATE WORK EXPERIENCE</AddButtonText>
            </AddButton>
            <RemoveButton>
              <RemoveButtonText>REMOVE WORK EXPERIENCE</RemoveButtonText>
            </RemoveButton>
          </ButtonContainer>
        </Block>
      </Screen>
    )
  }
}
