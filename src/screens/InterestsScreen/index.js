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

const MAX_NUM_INTERESTS = 3

class InterestsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interests: [],
      selected: [],
    }
  }

  addInterest = (interest, index) => {
    this.setState({
      interests: [...this.state.interests, interest],
      selected: [...this.state.selected, index],
    })
  }

  removeInterest = (oldInterest, index) => {
    this.setState({
      interests: this.state.interests.filter(
        interest => interest !== oldInterest,
      ),
      selected: this.state.selected.filter(interest => interest !== index),
    })
  }
  render() {
    const maxReached = this.state.selected.length === MAX_NUM_INTERESTS
    const onSelect = maxReached ? () => null : this.addInterest
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
            {tags.map((tag, idx) => (
              <RegistrationTag
                name={tag}
                key={Math.random()}
                index={idx}
                selected={this.state.selected.includes(idx)}
                onSelect={onSelect}
                onDeselect={this.removeInterest}
              />
            ))}
          </TagsRow>
        </TagsContainer>
      </Container>
    )
  }
}

export default InterestsScreen
