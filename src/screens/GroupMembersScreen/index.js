import React, { Component } from 'react'
import { Background, ScrollScreen, Divider, Container } from './styles'
import { FlatList } from 'react-native'
import GroupMembersHeader from './components/GroupMembersHeader'
import ListItem from './components/ListItem'

export default class GroupMembersScreen extends Component {
  render() {
    const people = this.props.navigation.getParam('people')
    return (
      <Background>
        <GroupMembersHeader navigation={this.props.navigation} />
        <Divider />
        <ScrollScreen>
          <Container>
            <FlatList
              styles={{ backgroundColor: 'red', flex: 1 }}
              keyExtractor={person => person.id}
              data={people}
              renderItem={({ item: person }) => (
                <ListItem
                  name={`${person.firstName} ${person.lastName}`}
                  picture={person.profilePicture}
                  navigate={id =>
                    this.props.navigation.navigate('Member', {
                      id,
                    })
                  }
                  id={person.id}
                />
              )}
            />
          </Container>
        </ScrollScreen>
      </Background>
    )
  }
}
