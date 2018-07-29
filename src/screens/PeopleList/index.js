import React, { Component } from 'react'
import { FlatList, ScrollView } from 'react-native'
import {
  BackgroundImage,
  HeaderBackground,
  Title,
  BackButton,
  Divider,
  Tint,
  SafeView,
  ScrollScreen,
} from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import ListItem from './components/ListItem'

class PeopleList extends Component {
  render() {
    const people = this.props.navigation.getParam('people')
    const title = this.props.navigation.getParam('title')
    return (
      <ScrollView>
        <BackgroundImage
          source={{
            uri:
              'https://images.unsplash.com/photo-1503238774835-1e800884d53b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e47ac33daae3f0b9c2add178ea367801&auto=format&fit=crop&w=1950&q=80',
          }}
        >
          <Tint>
            <SafeView>
              <HeaderBackground>
                <BackButton onPress={() => this.props.navigation.goBack()}>
                  <BackArrow name="ios-arrow-back" color="white" size={30} />
                </BackButton>
                <Title>{title}</Title>
              </HeaderBackground>
              <Divider />
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
            </SafeView>
          </Tint>
        </BackgroundImage>
      </ScrollView>
    )
  }
}

export default PeopleList
