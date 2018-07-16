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

const tags = [
  'TECH',
  'START-UPS',
  'DESIGN',
  'DEVELOPMENT',
  'MUSIC',
  'FINANCE',
  'TECH',
  'START-UPS',
  'DESIGN',
  'DEVELOPMENT',
  'MUSIC',
  'FINANCE',
  'TECH',
  'START-UPS',
  'DESIGN',
  'DEVELOPMENT',
  'MUSIC',
  'FINANCE',
  'TECH',
  'START-UPS',
  'DESIGN',
  'DEVELOPMENT',
  'MUSIC',
  'FINANCE',
]

class InterestsScreen extends Component {
  render() {
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
              <RegistrationTag name={tag} key={Math.random()} />
            ))}
          </TagsRow>
        </TagsContainer>
      </Container>
    )
  }
}

export default InterestsScreen
