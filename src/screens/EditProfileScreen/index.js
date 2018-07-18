import React, { Component } from 'react'
import { Modal, Text } from 'react-native'
import EditContactBlock from './components/EditContactBlock'
import BasicInfoBlock from './components/BasicInfoBlock'
import EditEducationBlock from './components/EditEducationBlock'
import EditExperienceBlock from './components/EditExperienceBlock'
import PickerComponent from '../../components/PickerComponent'
import EmojiModal from './components/EmojiModal'
import {
  Screen,
  Block,
  BlockTitle,
  ScreenScroll,
  Picture,
  PictureButton,
  EditLabel,
  Divider,
  ColumnContainer,
  LargeInput,
} from './styles'

import nodeEmoji from 'node-emoji'

import { Query } from 'react-apollo'
import { GET_USER } from './query'

const lookingForOptions = [
  { label: 'Business Mentor', value: 'BUSINESSMENTOR' },
  { label: 'Friends', value: 'FRIENDS' },
  { label: 'Business Partner', value: 'BUSINESSPARTNER' },
  { label: 'Employment', value: 'EMPLOYMENT' },
  { label: 'School Advice', value: 'SCHOOLADVICE' },
]

const waysToMeet = [
  { label: nodeEmoji.get('coffee'), value: 'COFFEE' },
  { label: nodeEmoji.get('hamburger'), value: 'HAMBURGER' },
  { label: nodeEmoji.get('phone'), value: 'PHONE' },
  { label: nodeEmoji.get('beers'), value: 'BEERS' },
]

export default class EditProfileScreen extends Component {
  state = {
    lookingForPickerEnabled: false,
    meetByPickerEnabled: false,
  }

  updateText = obj => {
    this.setState(obj)
  }

  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>
          if (error) return <Text>Error! ${error.message}`</Text>
          const displayData = Object.assign(
            { hometown: data.viewer.demographics.hometown },
            data.viewer,
            this.state,
          )
          const {
            email,
            linkedIn,
            facebook,
            twitter,
            profilePicture,
            education,
            preferredWaysToMeet,
            tags,
            workExperiences,
            lookingFor,
            lookingForPickerEnabled,
            meetByPickerEnabled,
          } = displayData

          const toggleWayToMeet = emoji => {
            if (preferredWaysToMeet.includes(emoji.value)) {
              this.setState({
                preferredWaysToMeet: preferredWaysToMeet.filter(
                  el => el !== emoji.value,
                ),
              })
            } else
              this.setState({
                preferredWaysToMeet: [...preferredWaysToMeet, emoji.value],
              })
          }

          return (
            <Screen>
              <ScreenScroll>
                <Picture
                  source={{
                    uri:
                      profilePicture ||
                      'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80',
                  }}
                >
                  <PictureButton>
                    <EditLabel>EDIT</EditLabel>
                  </PictureButton>
                </Picture>
                <BasicInfoBlock
                  state={displayData}
                  lookingForOptions={lookingForOptions}
                  waysToMeet={waysToMeet}
                  onChangeText={this.updateText}
                />
                <Divider />
                <Block>
                  <ColumnContainer>
                    <BlockTitle>My Interests</BlockTitle>
                    <LargeInput
                      multiline
                      defaultValue={tags.map(tag => tag.name).toString()}
                      onChangeText={interests => this.setState({ interests })}
                      placeholder="#Medicine #Health #Business #Tech #Venture Capital #Start-up"
                    />
                  </ColumnContainer>
                </Block>
                <Divider />
                <EditEducationBlock
                  navigation={this.props.navigation}
                  educationData={education}
                />
                <EditExperienceBlock
                  navigation={this.props.navigation}
                  experienceData={workExperiences}
                />
                <EditContactBlock
                  linkedIn={linkedIn}
                  email={email}
                  facebook={facebook}
                  twitter={twitter}
                  onChangeText={this.updateText}
                />
              </ScreenScroll>
              {lookingForPickerEnabled && (
                <PickerComponent
                  options={lookingForOptions}
                  doneOnPress={() => {
                    this.updateText({
                      lookingForPickerEnabled: false,
                    })
                  }}
                  onValueChange={this.updateText}
                  value={lookingFor}
                  keyName="lookingFor"
                />
              )}
              <Modal
                animationType="slide"
                transparent
                visible={meetByPickerEnabled}
              >
                <EmojiModal
                  doneOnPress={() => {
                    this.updateText({
                      meetByPickerEnabled: false,
                    })
                  }}
                  onSelection={toggleWayToMeet}
                  options={waysToMeet}
                  selected={preferredWaysToMeet}
                />
              </Modal>
            </Screen>
          )
        }}
      </Query>
    )
  }
}
