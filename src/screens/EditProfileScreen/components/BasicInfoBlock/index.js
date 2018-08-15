import React, { Component } from 'react'
import HorizontalEditField from '../HorizontalEditField'
import {
  Block,
  BlockTitle,
  Title,
  LargeInput,
  RowContainer,
  ColumnContainer,
  PickerText,
  PickerButton,
  Divider,
  WideContainer,
} from '../../styles'

export default class BasicInfoBlock extends Component {
  render() {
    const {
      firstName,
      lastName,
      hometown,
      bio,
      lookingFor,
      preferredWaysToMeet,
    } = this.props.state
    const { lookingForOptions, waysToMeet } = this.props

    const lookingForLabel = lookingForOptions.find(
      element => element.value === lookingFor,
    ).label

    const waysToMeetLabels = preferredWaysToMeet.map(
      el => waysToMeet.find(emoji => emoji.value === el.wayToMeet).label,
    )

    const { onChangeText, toggleLocationSearchModal } = this.props
    return (
      <WideContainer>
        <Block>
          <HorizontalEditField
            title="First Name"
            onChangeText={text => onChangeText({ firstName: text })}
            value={firstName}
          />
          <HorizontalEditField
            title="Last Name"
            onChangeText={text => onChangeText({ lastName: text })}
            value={lastName}
          />
          <HorizontalEditField
            onPress={toggleLocationSearchModal}
            title="Location"
            value={hometown}
          />
        </Block>
        <Divider />
        <Block>
          <ColumnContainer>
            <BlockTitle>Bio</BlockTitle>
            <LargeInput
              multiline
              defaultValue={bio}
              onChangeText={text => onChangeText({ bio: text })}
            />
          </ColumnContainer>
        </Block>
        <Divider />
        <Block>
          <RowContainer>
            <Title>Looking For</Title>
            <PickerButton
              onPress={() =>
                onChangeText({
                  lookingForPickerEnabled: true,
                  meetByPickerEnabled: false,
                })
              }
            >
              <PickerText>{lookingForLabel}</PickerText>
            </PickerButton>
          </RowContainer>
          <RowContainer>
            <Title>Meet By</Title>
            <PickerButton
              onPress={() =>
                onChangeText({
                  meetByPickerEnabled: true,
                  lookingForPickerEnabled: false,
                })
              }
            >
              <PickerText>{waysToMeetLabels}</PickerText>
            </PickerButton>
          </RowContainer>
        </Block>
      </WideContainer>
    )
  }
}
