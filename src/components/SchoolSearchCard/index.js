import React, { Component } from 'react'
import {
  Container,
  SchoolName,
  Location,
  SchoolContainer,
  CardContainer,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default class SchoolSearchCard extends Component {
  render() {
    const {
      updateState,
      toggleSchoolModal,
      schoolName,
      location,
      schoolId,
    } = this.props
    return (
      <Container
        onPress={() => {
          toggleSchoolModal()
          updateState({ schoolName, location, schoolId })
        }}
      >
        <Icon
          name="ios-school"
          size={40}
          color="rgb(75, 42, 168)"
          style={{ marginTop: 8 }}
        />
        <CardContainer>
          <SchoolContainer>
            <SchoolName>{schoolName}</SchoolName>
          </SchoolContainer>
          <Location>{location}</Location>
        </CardContainer>
      </Container>
    )
  }
}
