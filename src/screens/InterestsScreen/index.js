import React, { Component } from 'react'
import RegistrationTag from '../../components/RegistrationTag'
import {
  ScreenContainer,
  Container,
  Subtitle,
  TagsRow,
  TagsContainer,
} from './styles'
import SubmitButton from '../../components/SubmitButton'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native'

const tags = [
  'TECH',
  'START-UPS',
  'DESIGN',
  'DEVELOPMENT',
  'MUSIC',
  'FINANCE',
  'aTECH',
  'aSTART-UPS',
  'aDESIGN',
  'aDEVELOPMENT',
  'aMUSIC',
  'aFINANCE',
  'bTECH',
  'bSTART-UPS',
  'bDESIGN',
  'bDEVELOPMENT',
  'bMUSIC',
  'bFINANCE',
  'cTECH',
  'cSTART-UPS',
  'cDESIGN',
  'cDEVELOPMENT',
  'cMUSIC',
  'cFINANCE',
]

const MAX_NUM_INTERESTS = 3

export default class InterestsScreen extends Component {
  state = {
    interests: [],
  }

  toggleInterest = interest => {
    const { interests } = this.state
    if (interests.includes(interest)) {
      this.setState({
        interests: this.state.interests.filter(el => el !== interest),
      })
    } else
      this.setState({
        interests: [...this.state.interests, interest],
      })
  }

  render() {
    const maxReached = this.state.interests.length >= MAX_NUM_INTERESTS
    const userInfo = this.props.navigation.getParam('userInfo')
    return (
      <ScreenContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <Container>
            <Header
              title="Your Interests"
              showBack
              onBackPress={() => this.props.navigation.goBack()}
              progress="71.4%"
            />
            <Subtitle>
              Choose 3 options. These can be {'\n'}updated later on
            </Subtitle>
            <TagsContainer>
              <TagsRow>
                {tags.map(tag => (
                  <RegistrationTag
                    name={tag}
                    key={tag}
                    disable={maxReached && !this.state.interests.includes(tag)}
                    selected={this.state.interests.includes(tag)}
                    onPress={this.toggleInterest}
                  />
                ))}
              </TagsRow>
            </TagsContainer>
          </Container>
          {maxReached && (
            <SubmitButton
              onPress={() =>
                this.props.navigation.navigate('Skills', {
                  userInfo: {
                    ...userInfo,
                    interests: this.state.interests.join(', '),
                  },
                })
              }
              buttonText="CONTINUE"
            />
          )}
        </SafeAreaView>
      </ScreenContainer>
    )
  }
}
