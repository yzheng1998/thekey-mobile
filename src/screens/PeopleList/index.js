import React, { Component } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { HeaderBackground, Title, BackButton, Container } from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import ListItem from './components/ListItem'

class PeopleList extends Component {
  render() {
    const people = this.props.navigation.getParam('people')
    const title = this.props.navigation.getParam('title')
    return (
      <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}>
        <HeaderBackground>
          <BackButton onPress={() => this.props.navigation.goBack()}>
            <BackArrow name="ios-arrow-back" color="white" size={30} />
          </BackButton>
          <Title>{title}</Title>
        </HeaderBackground>
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
