import React, { Component } from 'react'
import {
  Buttons,
  StarsContainer,
  SpacedHeading,
  Avatar,
  RowSubContainer,
} from './styles'
import {
  BlockBackground,
  Block,
  Heading,
  InputField,
  Text,
  RowContainer,
} from '../../styles'
import CheckBox from '../CheckBox'
import fullStar from './full-star-pink.png'
import emptyStar from './empty-star-grey.png'
import Stars from 'react-native-stars'

const employmentTypes = [
  { value: 'FULLTIME', label: 'Full-Time' },
  { value: 'PARTTIME', label: 'Part-Time' },
  { value: 'INTERNSHIP', label: 'Internship' },
]

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
              spacing={10}
              starSize={23}
              count={5}
              fullStar={fullStar}
              emptyStar={emptyStar}
            />
          </StarsContainer>
        </RowContainer>
        <RowContainer>
          <SpacedHeading>Company Name</SpacedHeading>
          <RowSubContainer>
            <InputField
              placeholderTextColor="rgb(250, 53, 121)"
              placeholder={state.companyName}
              onChangeText={companyName => {
                updateState({ companyName })
              }}
            />
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
          <Buttons
            onPress={i => {
              updateState({ employmentType: employmentTypes[i].value })
            }}
            buttons={employmentTypes.map(el => el.label)}
            selectedIndex={employmentTypes.findIndex(
              el => el.value === employmentType,
            )}
            containerStyle={{ height: 30 }}
            textStyle={{ color: 'rgb(250,53,121)', fontWeight: '600' }}
            selectedTextStyle={{ color: 'white', fontWeight: '600' }}
            selectedButtonStyle={{
              backgroundColor: 'rgb(250,53,121)',
            }}
          />
        </Block>
        <Block>
          <CheckBox
            isCurrentEmployee={isCurrentEmployee}
            toggleCheckBox={() =>
              updateState({
                isCurrentEmployee: !isCurrentEmployee,
              })
            }
          />
          <RowContainer>
            <Text
              onPress={() =>
                updateState({ yearPickerEnabled: !yearPickerEnabled })
              }
            >
              Last worked here in {yearLastWorked || `...`}
            </Text>
          </RowContainer>
        </Block>
      </BlockBackground>
    )
  }
}
