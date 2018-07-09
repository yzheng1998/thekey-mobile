import React, { Component } from 'react'
import EditContactBlock from './components/EditContactBlock'
import BasicInfoBlock from './components/BasicInfoBlock'
import EditEducationBlock from './components/EditEducationBlock'
import EditExperienceBlock from './components/EditExperienceBlock'
import PickerComponent from './components/PickerComponent'
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

const lookingForOptions = [
  'Business Mentor',
  'Friends',
  'Business Partner',
  'Employment',
  'School Advice',
]

const waysToMeet = [
  nodeEmoji.get('coffee'),
  nodeEmoji.get('hamburger'),
  nodeEmoji.get('phone'),
  nodeEmoji.get('beers'),
]

const educationData = [
  {
    schoolType: 'UNDERGRADUATE',
    schoolName: 'Harvard University',
    degreeType: 'Bachelors Degree',
    major: 'East Asian Studies',
    startYear: '2013',
    graduationYear: '2017',
    id: 0,
  },
  {
    schoolType: 'GRADUATE',
    schoolName: 'Beachwood High School',
    startYear: '2009',
    graduationYear: '2013',
    id: 1,
  },
]

const experienceData = [
  {
    companyName: 'Unfiltered Network',
    position: 'CEO',
    startYear: '2016',
    endYear: 'Present / 1yr 9 mos',
    id: 0,
  },
  {
    companyName: 'Facemovie',
    position: 'Graphic Designer',
    startYear: '2010',
    endYear: '2016',
    id: 1,
  },
]

export default class EditProfileScreen extends Component {
  state = {
    name: 'Yuke Zheng',
    location: 'Cleveland, Ohio',
    bio:
      'Former Harvard Basketball player now transitioning to the business world and looking to learn and connect with others!',
    lookingFor: 'Business Mentor',
    lookingForText: 'Business Mentor',
    preferredWayToMeet: nodeEmoji.get('coffee'),
    preferredWayToMeetText: nodeEmoji.get('coffee'),
    profilePicture: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
    linkedIn: 'Linkedin.com/name',
    twitter: '@username',
    facebook: 'facebook.com/name',
    email: 'person@email.com',
    interests: '#Medicine #Health #Business #Tech',
    lookingForPickerEnabled: false,
    meetByPickerEnabled: false,
    educationData,
    workExperience: experienceData,
  }

  updateText = obj => {
    this.setState(obj)
  }

  addEducation = educationItem => {
    if (Number.isInteger(educationItem.id)) {
      educationData[educationItem.id] = educationItem
    } else educationData.push({ ...educationItem, id: educationData.length })
    this.setState({ educationData })
  }

  render() {
    return (
      <Screen>
        <ScreenScroll>
          <Picture source={this.state.profilePicture}>
            <PictureButton>
              <EditLabel>EDIT</EditLabel>
            </PictureButton>
          </Picture>
          <BasicInfoBlock state={this.state} onChangeText={this.updateText} />
          <Divider />
          <Block>
            <ColumnContainer>
              <BlockTitle>My Interests</BlockTitle>
              <LargeInput
                multiline
                defaultValue={this.state.interests}
                onChangeText={interests => this.setState({ interests })}
                placeholder="#Medicine #Health #Business #Tech #Venture Capital #Start-up"
              />
            </ColumnContainer>
          </Block>
          <Divider />
          <EditEducationBlock
            navigation={this.props.navigation}
            educationData={this.state.educationData}
            addEducation={this.addEducation}
          />
          <EditExperienceBlock
            navigation={this.props.navigation}
            experienceData={this.state.workExperience}
          />
          <EditContactBlock
            linkedIn={this.state.linkedIn}
            email={this.state.email}
            facebook={this.state.facebook}
            twitter={this.state.twitter}
            onChangeText={this.updateText}
          />
        </ScreenScroll>
        {this.state.lookingForPickerEnabled && (
          <PickerComponent
            options={lookingForOptions}
            doneOnPress={() => {
              this.updateText({
                lookingForText: this.state.lookingFor,
                lookingForPickerEnabled: false,
              })
            }}
            onValueChange={this.updateText}
            value={this.state.lookingFor}
            keyName="lookingFor"
          />
        )}
        {this.state.meetByPickerEnabled && (
          <PickerComponent
            options={waysToMeet}
            doneOnPress={() => {
              this.updateText({
                preferredWayToMeetText: this.state.preferredWayToMeet,
                meetByPickerEnabled: false,
              })
            }}
            onValueChange={this.updateText}
            value={this.state.preferredWayToMeet}
            keyName="preferredWayToMeet"
          />
        )}
      </Screen>
    )
  }
}
