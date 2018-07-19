import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'
import SearchBar from '../SearchBar'
import SchoolSearchCard from '../SchoolSearchCard'
import uuidv4 from 'uuid/v4'

const exampleSchool = {
  name: 'Harvard University',
  location: 'Cambridge, Massachusetts',
}

const exampleSchools = [exampleSchool, exampleSchool, exampleSchool]

const schoolsWithIds = exampleSchools.map(school => ({
  ...school,
  id: uuidv4(),
}))

export default class SchoolSearchModal extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    return (
      <Container>
        <SearchBar
          updateText={this.updateText}
          searchText={this.state.searchText}
          placeholderText="Search for a school"
        />
        <FlatList
          keyExtractor={university => university.id}
          data={schoolsWithIds}
          renderItem={({ item: university }) => (
            <SchoolSearchCard
              school={university.name}
              location={university.location}
            />
          )}
        />
      </Container>
    )
  }
}
