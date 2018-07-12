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
      name,
      location,
      bio,
      lookingForText,
      preferredWaysToMeet,
    } = this.props.state
    const { onChangeText } = this.props
    return (
      <WideContainer>
        <Block>
          <HorizontalEditField
            title="Name"
            onChangeText={text => onChangeText({ name: text })}
            value={name}
          />
          <HorizontalEditField
            title="Location"
            onChangeText={text => onChangeText({ location: text })}
            value={location}
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
              <PickerText>{lookingForText}</PickerText>
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
              <PickerText>{preferredWaysToMeet}</PickerText>
            </PickerButton>
          </RowContainer>
        </Block>
      </WideContainer>
    )
  }
}
