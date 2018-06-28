import React, { Component } from 'react'
import { ScreenContainer, Divider } from './styles'

import MyProfilePicBlock from './components/MyProfilePicBlock'
import MyProfileBioBlock from './components/MyProfileBioBlock'
import ButtonRowView from './components/ButtonRowView'
import Description from './components/Description'
import EducationListView from './components/EducationListView'
import ExperienceListView from './components/ExperienceListView'
import ContactContainerView from './components/ContactContainerView'

export default class ProfileScreen extends Component {
  render() {
    const {
      email,
      firstName,
      lastName,
      hometown,
      state,
      bio,
      tags,
      linkedIn,
      facebook,
      twitter,
      profilePicture,
      education,
      interestingFact,
      preferredWayToMeet,
      workExperience,
      lookingFor,
      goodQualities,
    } = this.props.user
    return (
      <ScreenContainer>
        <MyProfilePicBlock
          name={`${firstName} ${lastName}`}
          city={hometown}
          state={state}
          profilePic={profilePicture}
        />
        <ButtonRowView />
        <MyProfileBioBlock tagData={tags} bioText={bio} />
        <Divider />
        <Description row title="Looking For" content={lookingFor} />
        <Description
          row
          title="Preferred Way To Meet"
          content={preferredWayToMeet}
        />
        <Divider />
        <EducationListView educationData={education} />
        <Divider />
        <ExperienceListView experienceData={workExperience} />
        <Description
          row={false}
          title="Interesting Fact About Me"
          content={interestingFact}
        />
        <Description
          row={false}
          title="Good Qualities"
          content={goodQualities}
        />
        <ContactContainerView
          linkedIn={linkedIn}
          email={email}
          facebook={facebook}
          twitter={twitter}
        />
      </ScreenContainer>
    )
  }
}
