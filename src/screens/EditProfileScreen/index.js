import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import EditContactBlock from './components/EditContactBlock'
import BasicInfoBlock from './components/BasicInfoBlock'
import EditEducationBlock from './components/EditEducationBlock'
import EditExperienceBlock from './components/EditExperienceBlock'
import ProfilePicture from './components/ProfilePicture'
import InterestsSearchModal from './components/InterestsSearchModal'
import EditProfileHeader from './components/EditProfileHeader'
import EditPencil from 'react-native-vector-icons/Feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoadingWrapper from '../../components/LoadingWrapper'
import LocationSearchModal from '../../components/HometownSearchModal'
import EditWaysToMeetModal from './components/EditWaysToMeetModal'
import EditInitiativesModal from './components/EditInitiativesModal'
import {
  Screen,
  Block,
  BlockTitle,
  Divider,
  ColumnContainer,
  TagText,
  EditTagsContainer,
  EditButton,
  TitleRow,
} from './styles'

import { currentInitiativesOptions, waysToMeetOptions } from '../../constants'

import { Query } from 'react-apollo'
import { GET_USER } from './query'

const defaultProfilePicture =
  'https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc363c8e033813d4f7b798846bb13a24&auto=format&fit=crop&w=582&q=80'

export default class EditProfileScreen extends Component {
  state = {
    meetByPickerEnabled: false,
    interestsModalVisible: false,
    showLocationSearchModal: false,
    showEditWaysToMeetModal: false,
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
  toggleLocationSearchModal = () => {
    this.setState({
      showLocationSearchModal: !this.state.showLocationSearchModal,
    })
  }
  toggleEditWaysToMeetModal = () => {
    this.setState({
      showEditWaysToMeetModal: !this.state.showEditWaysToMeetModal,
    })
  }
  toggleEditInitiativesModal = () => {
    this.setState({
      showEditInitiativesModal: !this.state.showEditInitiativesModal,
    })
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
            firstName,
            lastName,
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
            currentInitiatives,
          } = displayData

          const preferredWaysToMeetIds = preferredWaysToMeet.map(p => p.id)
          const currentInitiativesIds = currentInitiatives.map(c => c.id)
          const tagIds = tags.map(t => t.id)
          const updateProfileVariables = {
            updateUserInput: {
              firstName,
              lastName,
              email,
              bio,
              linkedIn,
              facebook,
              twitter,
              profilePicture,
              hometown,
              tags: tagIds,
              preferredWaysToMeet: preferredWaysToMeetIds,
              currentInitiatives: currentInitiativesIds,
            },
          }
          return (
            <Screen>
              <LocationSearchModal
                setText={obj => this.setState({ hometown: obj.hometown })}
                onPress={this.toggleLocationSearchModal}
                visible={this.state.showLocationSearchModal}
              />
              <EditWaysToMeetModal
                isVisible={this.state.showEditWaysToMeetModal}
                toggleModal={this.toggleEditWaysToMeetModal}
                preferredWaysToMeet={preferredWaysToMeet}
                removeWayToMeet={wayToMeet => {
                  this.setState({
                    preferredWaysToMeet: preferredWaysToMeet.filter(
                      el => el.id !== wayToMeet.id,
                    ),
                  })
                }}
                addWayToMeet={wayToMeet => {
                  this.setState({
                    preferredWaysToMeet: [...preferredWaysToMeet, wayToMeet],
                  })
                }}
              />
              <EditInitiativesModal
                isVisible={this.state.showEditInitiativesModal}
                toggleModal={this.toggleEditInitiativesModal}
                currentInitiatives={currentInitiatives}
                removeInitiative={initiative => {
                  this.setState({
                    currentInitiatives: currentInitiatives.filter(
                      el => el.id !== initiative.id,
                    ),
                  })
                }}
                addInitiative={initiative => {
                  this.setState({
                    currentInitiatives: [...currentInitiatives, initiative],
                  })
                }}
              />
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
                  currentInitiativesOptions={currentInitiativesOptions}
                  waysToMeetOptions={waysToMeetOptions}
                  state={displayData}
                  onChangeText={this.updateText}
                  toggleLocationSearchModal={this.toggleLocationSearchModal}
                  toggleEditWaysToMeetModal={this.toggleEditWaysToMeetModal}
                  toggleEditInitiativesModal={this.toggleEditInitiativesModal}
                />
                <Divider />
                <Block>
                  <ColumnContainer>
                    <TitleRow>
                      <BlockTitle>My Interests</BlockTitle>
                      <EditButton onPress={this.openInterestsModal}>
                        <EditPencil
                          name="edit-2"
                          color="rgb(148, 157, 170)"
                          size={20}
                        />
                      </EditButton>
                    </TitleRow>
                    <EditTagsContainer>
                      <TagText>
                        {tags.map(tag => `#${tag.name}`).join(' ')}
                      </TagText>
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
            </Screen>
          )
        }}
      </Query>
    )
  }
}
