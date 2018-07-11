import React, { Component } from 'react'
import { FlatList, ScrollView } from 'react-native'
import {
  HeaderBackground,
  Title,
  BackButton,
  Container,
  Divider,
} from './styles'
import SearchBar from '../../components/SearchBar'
import BackArrow from 'react-native-vector-icons/Ionicons'
import ListItem from './components/ListItem'

class PeopleList extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const people = this.props.navigation.getParam('people')
    const title = this.props.navigation.getParam('title')
    const { searchText } = this.state
    return (
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderBackground>
          <BackButton onPress={() => this.props.navigation.goBack()}>
            <BackArrow name="ios-arrow-back" color="white" size={30} />
          </BackButton>
          <Title>{title}</Title>
        </HeaderBackground>
        <SearchBar
          updateText={this.updateText}
          searchText={searchText}
          placeholderText="Search Jobs & Internships"
        />
        <Divider />
        <Container>
          <FlatList
            styles={{ backgroundColor: 'red', flex: 1 }}
            keyExtractor={person => person.id}
            data={people}
            renderItem={({ item: person }) => (
              <ListItem
                name={`${person.firstName} ${person.lastName}`}
                picture={person.profilePicture}
              />
            )}
          />
        </Container>
      </ScrollView>
    )
  }
}

export default PeopleList
