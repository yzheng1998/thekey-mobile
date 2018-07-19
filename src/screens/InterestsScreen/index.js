import React, { Component } from 'react'
import RegistrationTag from '../../components/RegistrationTag'
import {
  Header,
  Container,
  Title,
  GreenProgressBar,
  ProgressBar,
  Subtitle,
  BackButtonContainer,
  TagsRow,
  TagsContainer,
} from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'
import RegisterButton from '../../components/RegisterButton'

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

class InterestsScreen extends Component {
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
    return (
      <Container>
        <Header>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={27} color="black" />
          </BackButtonContainer>
          <Title>Your Interests</Title>
        </Header>
        <ProgressBar />
        <GreenProgressBar />
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
          <RegisterButton
            buttonText="NEXT"
            disabled={!maxReached}
            onPress={() => null}
          />
        </TagsContainer>
      </Container>
    )
  }
}

export default InterestsScreen
