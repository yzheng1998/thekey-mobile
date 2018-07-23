import React, { Component } from 'react'
import { Screen, Block } from '../../styles'
import { RowContainer, ButtonContainer, SwitchLabel } from './styles'
import LineInput from '../../../../components/LineInput'
import AddExperienceButton from './components/AddExperienceButton'
import UpdateExperienceButton from './components/UpdateExperienceButton'
import DeleteExperienceButton from './components/DeleteExperienceButton'
import { Switch, Keyboard, TouchableWithoutFeedback } from 'react-native'
import _ from 'lodash'

export default class AddExperienceForm extends Component {
  constructor(props) {
    super(props)
    const formElements = this.props.navigation.getParam('formElements')
    const experienceInfo = _.pick(formElements, [
      'employer',
      'position',
      'startDate',
      'endDate',
      'id',
    ])
    this.state = {
      ...experienceInfo,
      isCurrentEmployee: experienceInfo.endDate === null,
    }
  }

  // functions to update state
  updateEmployer = text => {
    this.setState({ employer: text })
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
      employer,
      position,
      startDate,
      endDate,
      isCurrentEmployee,
      id,
    } = this.state
    const disabled = !(
      employer &&
      position &&
      startDate &&
      endDate !== undefined
    ) // endDate can be null (means user is currently employed)

    const toggleSwitch = () => {
      this.setState({
        isCurrentEmployee: !this.state.isCurrentEmployee,
        endDate: !isCurrentEmployee ? null : undefined,
      })
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Screen>
          <Block>
            <LineInput
              text={employer}
              placeholderText="Company"
              updateText={text => this.updateEmployer(text)}
            />
            <LineInput
              text={position}
              placeholderText="Position"
              updateText={text => this.updatePosition(text)}
            />
            <RowContainer>
              <SwitchLabel>I am currently working here</SwitchLabel>
              <Switch
                onValueChange={toggleSwitch}
                value={this.state.isCurrentEmployee}
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
                // if endDate is null (currentEmployee) display endDate as "Present"
                text={
                  endDate === null || isCurrentEmployee === true
                    ? 'Present'
                    : endDate
                }
                width="48%"
                placeholderText="End Date"
                updateText={text => this.updateEndDate(text)}
              />
            </RowContainer>
            <ButtonContainer>
              {this.editMode && (
                <UpdateExperienceButton
                  disabled={disabled}
                  refreshUpdateExperience={this.props.navigation.getParam(
                    'refreshData',
                  )}
                  id={id}
                  employer={employer}
                  position={position}
                  startDate={startDate}
                  endDate={endDate}
                  navigation={this.props.navigation}
                />
              )}
              {!this.editMode && (
                <AddExperienceButton
                  disabled={disabled}
                  refreshAddExperience={this.props.navigation.getParam(
                    'refreshData',
                  )}
                  employer={employer}
                  position={position}
                  startDate={startDate}
                  endDate={endDate}
                  navigation={this.props.navigation}
                />
              )}
              <DeleteExperienceButton
                refreshDeleteExperience={this.props.navigation.getParam(
                  'refreshData',
                )}
                navigation={this.props.navigation}
                id={id}
              />
            </ButtonContainer>
          </Block>
        </Screen>
      </TouchableWithoutFeedback>
    )
  }
}
