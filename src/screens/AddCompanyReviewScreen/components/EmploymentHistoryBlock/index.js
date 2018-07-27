import React, { Component } from 'react'
import {
  Buttons,
  StarsContainer,
  SubBlock,
  SpacedHeading,
  Avatar,
} from './styles'
import {
  BlockBackground,
  Block,
  Heading,
  InputField,
  RowHeader,
  Text,
  RowContainer,
} from '../../styles'
import CheckBox from '../CheckBox'
import fullStar from './full-star-pink.png'
import emptyStar from './empty-star-grey.png'
import Stars from 'react-native-stars'

export default class EmploymentHistoryBlock extends Component {
  static createYearData() {
    const yearArray = []
    for (let i = 1970; i <= new Date().getFullYear(); i += 1) {
      yearArray.push({ label: i.toString(), value: i.toString() })
    }
    return yearArray
  }
  constructor(props) {
    super(props)
    this.state = {
      selectedEmploymentIndex: this.matchEmploymentTypeWithIndex(
        this.props.employmentType,
      ),
    }
  }

  matchEmploymentTypeWithIndex = employmentType => {
    switch (employmentType) {
      case 'Full-time':
        return 0
      case 'Part-time':
        return 1
      default:
        // internship
        return 2
    }
  }
  matchIndexWithEmploymentType = selectedIndex => {
    switch (selectedIndex) {
      case 0:
        return 'Full-time'
      case 1:
        return 'Part-time'
      default:
        return 'Internship'
    }
  }

  render() {
    const {
      handleStarRating,
      rating,
      updateEmploymentType,
      employmentType,
      isCurrentEmployee,
      handleCheckBox,
      yearLastWorked,
      companyName,
      onChangeCompanyText,
      handleEnablePicker,
      companyPicture,
    } = this.props
    const employmentTypes = ['Full-time', 'Part-time', 'Internship']
    return (
      <BlockBackground>
        <RowHeader>
          <SubBlock>
            <SpacedHeading>Select Rating</SpacedHeading>
            <SpacedHeading>Company Name</SpacedHeading>
          </SubBlock>
          <SubBlock>
            <StarsContainer>
              <Stars
                rating={rating}
                update={val => {
                  handleStarRating(val)
                }}
                spacing={10}
                starSize={23}
                count={5}
                fullStar={fullStar}
                emptyStar={emptyStar}
              />
            </StarsContainer>
            <RowHeader>
              <InputField
                placeholderTextColor="rgb(250, 53, 121)"
                placeholder={companyName}
                onChangeText={text => {
                  onChangeCompanyText(text)
                }}
              />
              <Avatar
                source={{
                  uri: companyPicture,
                }}
              />
            </RowHeader>
          </SubBlock>
        </RowHeader>
        <Block>
          <Heading>Employment Type</Heading>
          <Buttons
            onPress={index => {
              this.setState({
                selectedEmploymentIndex: index,
              })
              updateEmploymentType(this.matchIndexWithEmploymentType(index))
            }}
            buttons={employmentTypes}
            selectedIndex={this.matchEmploymentTypeWithIndex(employmentType)}
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
            handleCheckBox={handleCheckBox}
          />
          <RowContainer>
            <Text onPress={() => handleEnablePicker()}>
              Last worked here in... <Text>{yearLastWorked}</Text>
            </Text>
          </RowContainer>
        </Block>
      </BlockBackground>
    )
  }
}
