import React, { Component } from 'react'
import {
  EducationItemContainer,
  EducationBody,
  InfoContainer,
  SchoolName,
  Location,
  ClearIconButton,
} from '../../styles'
import Icon from 'react-native-vector-icons/Ionicons'
import ClearIcon from 'react-native-vector-icons/MaterialIcons'

export default class EducationItem extends Component {
  render() {
    const { id, item, cancel } = this.props
    const { schoolName, location } = item
    return (
      <EducationItemContainer>
        <Icon
          name="ios-school"
          size={40}
          color="rgb(75, 42, 168)"
          style={{ marginTop: 8 }}
        />
        <EducationBody>
          <InfoContainer>
            <SchoolName>{schoolName}</SchoolName>
            <Location>{location}</Location>
          </InfoContainer>
        </EducationBody>
        <ClearIconButton
          onPress={() => {
            cancel(id)
          }}
        >
          <ClearIcon name="clear" size={24} color="rgb(181, 171, 202)" />
        </ClearIconButton>
      </EducationItemContainer>
    )
  }
}
