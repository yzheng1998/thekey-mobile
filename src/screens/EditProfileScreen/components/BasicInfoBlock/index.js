import React, { Component } from 'react'
import HorizontalEditField from '../HorizontalEditField'
import {
  Block,
  BlockTitle,
  Title,
  LargeInput,
  ColumnContainer,
  DescriptionText,
  EditDescriptionView,
  Divider,
  WideContainer,
  TitleRow,
  EditButton,
} from '../../styles'
import EditPencil from 'react-native-vector-icons/Feather'

export default class BasicInfoBlock extends Component {
  render() {
    const {
      firstName,
      lastName,
      hometown,
      bio,
      currentInitiatives,
      preferredWaysToMeet,
    } = this.props.state
    const { currentInitiativesOptions, waysToMeetOptions } = this.props

    const currentInitiativesLabels = currentInitiatives.map(
      el =>
        currentInitiativesOptions.find(emoji => emoji.value === el.initiative)
          .editLabel,
    )

    const waysToMeetLabels = preferredWaysToMeet.map(
      el =>
        waysToMeetOptions.find(emoji => emoji.value === el.wayToMeet).editLabel,
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
          <ColumnContainer>
            <TitleRow>
              <Title>Current Initiatives</Title>
              <EditButton>
                <EditPencil
                  name="edit-2"
                  color="rgb(148, 157, 170)"
                  size={20}
                />
              </EditButton>
            </TitleRow>
            <EditDescriptionView>
              <DescriptionText>
                {currentInitiativesLabels.join(', ')}
              </DescriptionText>
            </EditDescriptionView>
          </ColumnContainer>
        </Block>
        <Divider />
        <Block>
          <ColumnContainer>
            <TitleRow>
              <Title>Meet By</Title>
              <EditButton>
                <EditPencil
                  name="edit-2"
                  color="rgb(148, 157, 170)"
                  size={20}
                />
              </EditButton>
            </TitleRow>
            <EditDescriptionView>
              <DescriptionText>{waysToMeetLabels.join(', ')}</DescriptionText>
            </EditDescriptionView>
          </ColumnContainer>
        </Block>
      </WideContainer>
    )
  }
}
