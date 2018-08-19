import React, { Component } from 'react'
import {
  Buttons,
  StarsContainer,
  StarContainer,
  SpacedHeading,
  Avatar,
  RowSubContainer,
  TextContainer,
  ButtonContainer,
  SwitchContainer,
  Label,
} from './styles'
import { BlockBackground, Block, Heading, RowContainer } from '../../styles'
import Stars from 'react-native-stars'
import { TouchableOpacity } from 'react-native'
import Switch from 'react-native-switch-pro'
import Star from 'react-native-vector-icons/FontAwesome'

const employmentTypes = [
  { value: 'FULLTIME', label: 'Full-Time' },
  { value: 'PARTTIME', label: 'Part-Time' },
  { value: 'INTERNSHIP', label: 'Internship' },
]

const DisplayStar = ({ color }) => (
  <StarContainer>
    <Star name="star" size={23} color={color} />
  </StarContainer>
)

export default class EmploymentHistoryBlock extends Component {
  static createYearData() {
    const yearArray = []
    for (let i = 1970; i <= new Date().getFullYear(); i += 1) {
      yearArray.push({ label: i.toString(), value: i.toString() })
    }
    return yearArray
  }

  render() {
    const { state, updateState } = this.props
    const {
      picture,
      employmentType,
      isCurrentEmployee,
      yearPickerEnabled,
      yearLastWorked,
    } = state
    return (
      <BlockBackground>
        <RowContainer>
          <SpacedHeading>Select Rating</SpacedHeading>
          <StarsContainer>
            <Stars
              rating={state.rating}
              update={rating => {
                updateState({ rating })
              }}
              starSize={90}
              count={5}
              fullStar={<DisplayStar color="rgb(244, 89, 82)" />}
              emptyStar={<DisplayStar color="rgb(211, 216, 223)" />}
            />
          </StarsContainer>
        </RowContainer>
        <RowContainer>
          <SpacedHeading>Company Name</SpacedHeading>
          <RowSubContainer>
            <TextContainer>
              <Label>{state.companyName}</Label>
            </TextContainer>
            <Avatar
              source={{
                uri: picture,
              }}
            />
          </RowSubContainer>
        </RowContainer>
        <Block>
          <RowContainer>
            <Heading>Employment Type</Heading>
          </RowContainer>
          <ButtonContainer>
            <Buttons
              onPress={i => {
                updateState({ employmentType: employmentTypes[i].value })
              }}
              buttons={employmentTypes.map(el => el.label)}
              selectedIndex={employmentTypes.findIndex(
                el => el.value === employmentType,
              )}
              containerStyle={{ height: 30 }}
              textStyle={{ color: 'rgb(244, 89, 82)', fontWeight: '600' }}
              selectedTextStyle={{ color: 'white', fontWeight: '600' }}
              selectedButtonStyle={{
                backgroundColor: 'rgb(220, 60, 53)',
              }}
            />
          </ButtonContainer>
        </Block>
        <Block>
          <RowContainer>
            <SpacedHeading>Current Employee</SpacedHeading>
            <SwitchContainer>
              <Switch
                height={23}
                width={45}
                backgroundActive="rgb(220, 60, 53)"
                value={isCurrentEmployee}
                onSyncPress={() => {
                  updateState({
                    isCurrentEmployee: !isCurrentEmployee,
                    yearPickerEnabled: false,
                    yearLastWorked: '2018',
                  })
                }}
              />
            </SwitchContainer>
          </RowContainer>

          <RowContainer>
            <TouchableOpacity
              disabled={isCurrentEmployee}
              onPress={() =>
                updateState({ yearPickerEnabled: !yearPickerEnabled })
              }
            >
              <Label disabled={isCurrentEmployee}>
                I last worked here in {yearLastWorked || `...`}
              </Label>
            </TouchableOpacity>
          </RowContainer>
        </Block>
      </BlockBackground>
    )
  }
}
