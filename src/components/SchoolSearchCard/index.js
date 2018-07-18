import React, { Component } from 'react'
import { Container, SchoolName, Location } from './styles'

export default class SchoolSearchModal extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { school, location } = this.props
    return (
      <Container>
        <SchoolName>{school}</SchoolName>
        <Location>{location}</Location>
      </Container>
    )
  }
}
