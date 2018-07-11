import React, { Component } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { HeaderBackground, Title, BackButton } from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import ListItem from './components/ListItem'

class PeopleList extends Component {
  render() {
    const people = this.props.navigation.getParam('people')
    const title = this.props.navigation.getParam('title')
    return (
      <ScrollView>
        <HeaderBackground>
          <BackButton onPress={() => this.props.navigation.goBack()}>
            <BackArrow name="ios-arrow-back" color="white" size={30} />
          </BackButton>
          <Title>{title}</Title>
        </HeaderBackground>
        <SearchBar lightTheme placeholder="Search Jobs & Internships" />
        <FlatList
          keyExtractor={person => person.id}
          data={people}
          renderItem={({ item: person }) => (
            <ListItem name={person.firstName} picture={person.profilePicture} />
          )}
        />
      </ScrollView>
    )
  }
}

export default PeopleList
