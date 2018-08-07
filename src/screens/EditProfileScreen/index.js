import React, { Component } from 'react'
import { Modal, AsyncStorage } from 'react-native'
import EditContactBlock from './components/EditContactBlock'
import BasicInfoBlock from './components/BasicInfoBlock'
import EditEducationBlock from './components/EditEducationBlock'
import EditExperienceBlock from './components/EditExperienceBlock'
import PickerComponent from '../../components/PickerComponent'
import EmojiModal from './components/EmojiModal'
import ProfilePicture from './components/ProfilePicture'
import InterestsSearchModal from './components/InterestsSearchModal'
import EditProfileHeader from './components/EditProfileHeader'
import EditPencil from 'react-native-vector-icons/MaterialIcons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoadingWrapper from '../../components/LoadingWrapper'
import {
  Screen,
  Block,
  BlockTitle,
  Divider,
  ColumnContainer,
  TagText,
  EditTagsContainer,
  EditTagsButton,
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

const defaultProfilePicture =
  'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80'

export default class EditProfileScreen extends Component {
  state = {
    lookingForPickerEnabled: false,
    meetByPickerEnabled: false,
    interestsModalVisible: false,
  }

  updateText = obj => {
    this.setState(obj)
  }

  updateProfilePicture = pic => {
    this.setState({ profilePicture: pic }, async () => {
      const completeStore = await AsyncStorage.setItem('profilePicture', pic)
      return completeStore
    })
  }
  openInterestsModal = () => {
    this.setState({ interestsModalVisible: true })
  }
  closeInterestsModal = () => {
    this.setState({ interestsModalVisible: false })
  }

  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, data, refetch }) => {
          if (loading) return <LoadingWrapper loading />
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
            bio,
            hometown,
            education,
            preferredWaysToMeet,
            tags,
            workExperiences,
            lookingFor,
            lookingForPickerEnabled,
            meetByPickerEnabled,
          } = displayData
          const toggleWayToMeet = emoji => {
            if (
              preferredWaysToMeet
                .map(obj => obj.wayToMeet)
                .includes(emoji.wayToMeet)
            ) {
              this.setState({
                preferredWaysToMeet: preferredWaysToMeet.filter(
                  el => el.wayToMeet !== emoji.wayToMeet,
                ),
              })
            } else
              this.setState({
                preferredWaysToMeet: [...preferredWaysToMeet, emoji],
              })
          }

          const preferredWaysToMeetIds = preferredWaysToMeet.map(p => p.id)
          const tagIds = tags.map(t => t.id)
          const updateProfileVariables = {
            updateUserInput: {
              email,
              bio,
              linkedIn,
              facebook,
              twitter,
              profilePicture,
              lookingFor,
              hometown,
              tags: tagIds,
              preferredWaysToMeet: preferredWaysToMeetIds,
            },
          }
          return (
            <Screen>
              <EditProfileHeader
                goBack={() => this.props.navigation.goBack()}
                mutationVariables={updateProfileVariables}
                refreshData={refetch}
              />
              <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
              >
                <ProfilePicture
                  profilePicture={profilePicture}
                  defaultProfilePicture={defaultProfilePicture}
                  refreshData={refetch}
                  updateProfilePicture={this.updateProfilePicture}
                />
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
                    <EditTagsContainer>
                      <TagText>
                        {tags.map(tag => `#${tag.name}`).join(' ')}
                      </TagText>
                      <EditTagsButton onPress={this.openInterestsModal}>
                        <EditPencil name="edit" color="black" size={15} />
                      </EditTagsButton>
                    </EditTagsContainer>
                    <InterestsSearchModal
                      navigation={this.props.navigation}
                      visible={this.state.interestsModalVisible}
                      closeModal={this.closeInterestsModal}
                      updateInterests={tagArray =>
                        this.setState({ tags: tagArray })
                      }
                    />
                  </ColumnContainer>
                </Block>
                <Divider />
                <EditEducationBlock
                  navigation={this.props.navigation}
                  refreshData={refetch}
                  educationData={education}
                />
                <EditExperienceBlock
                  navigation={this.props.navigation}
                  refreshData={refetch}
                  experienceData={workExperiences}
                />
                <EditContactBlock
                  linkedIn={linkedIn}
                  email={email}
                  facebook={facebook}
                  twitter={twitter}
                  onChangeText={this.updateText}
                />
              </KeyboardAwareScrollView>
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
