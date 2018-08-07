import React, { Component } from 'react'
import {
  Buttons,
  StarsContainer,
  SpacedHeading,
  Avatar,
  RowSubContainer,
  TextContainer,
  ButtonContainer,
} from './styles'
import {
  BlockBackground,
  Block,
  Heading,
  Text,
  RowContainer,
} from '../../styles'
import CheckBox from '../CheckBox'
import fullStar from './full-star-pink.png'
import emptyStar from './empty-star-grey.png'
import Stars from 'react-native-stars'
import { TouchableOpacity } from 'react-native'

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
            <TextContainer>
              <Text>{state.companyName}</Text>
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
              textStyle={{ color: 'rgb(250,53,121)', fontWeight: '600' }}
              selectedTextStyle={{ color: 'white', fontWeight: '600' }}
              selectedButtonStyle={{
                backgroundColor: 'rgb(250,53,121)',
              }}
            />
          </ButtonContainer>
        </Block>
        <Block>
          <CheckBox
            isCurrentEmployee={isCurrentEmployee}
            toggleCheckBox={() =>
              updateState({
                isCurrentEmployee: !isCurrentEmployee,
                yearPickerEnabled: false,
              })
            }
          />
          <RowContainer>
            <TouchableOpacity
              disabled={isCurrentEmployee}
              onPress={() =>
                updateState({ yearPickerEnabled: !yearPickerEnabled })
              }
            >
              <Text disabled={isCurrentEmployee}>
                I last worked here in {yearLastWorked || `...`}
              </Text>
            </TouchableOpacity>
          </RowContainer>
        </Block>
      </BlockBackground>
    )
  }
}
