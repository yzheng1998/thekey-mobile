import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, SchoolName, Location } from './styles'
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
        <View>
          <SchoolName>{schoolName}</SchoolName>
          <Location>{location}</Location>
        </View>
      </Container>
    )
  }
}
