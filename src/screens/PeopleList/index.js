import React, { Component } from 'react'
import { FlatList, ScrollView } from 'react-native'
import { ScrollScreen } from './styles'
import ListItem from './components/ListItem'
import SocietyHeader from '../../screens/SocietyScreen/components/SocietyHeader'

class PeopleList extends Component {
  render() {
    const people = this.props.navigation.getParam('people')
    const title = this.props.navigation.getParam('title')
    return (
      <ScrollView>
        <SocietyHeader navigation={this.props.navigation} title={title} />
        <ScrollScreen>
          <FlatList
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
        </ScrollScreen>
      </ScrollView>
    )
  }
}

export default PeopleList
