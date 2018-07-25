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

const tags = [
  'DRIVEN',
  'FOCUSSED',
  'EXTRAVERT',
  'EFFICIENT',
  'THOROUGH',
  'SERIOUS',
  'aDRIVEN',
  'aFOCUSSED',
  'aEXTRAVERT',
  'aEFFICIENT',
  'aTHOROUGH',
  'aSERIOUS',
  'bDRIVEN',
  'bFOCUSSED',
  'bEXTRAVERT',
  'bEFFICIENT',
  'bTHOROUGH',
  'bSERIOUS',
]

const MAX_NUM_INTERESTS = 3

export default class SkillsScreen extends Component {
  state = {
    skills: [],
  }

  toggleSkill = skill => {
    const { skills } = this.state
    if (skills.includes(skill)) {
      this.setState({
        skills: this.state.skills.filter(el => el !== skill),
      })
    } else
      this.setState({
        skills: [...this.state.skills, skill],
      })
  }

  render() {
    const maxReached = this.state.skills.length >= MAX_NUM_INTERESTS
    const userInfo = this.props.navigation.getParam('userInfo')
    return (
      <ScreenContainer>
        <Container>
          <Header
            title="Describe Yourself"
            showBack
            onBackPress={() => this.props.navigation.goBack()}
            progress="85.7%"
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
                  disable={maxReached && !this.state.skills.includes(tag)}
                  selected={this.state.skills.includes(tag)}
                  onPress={this.toggleSkill}
                />
              ))}
            </TagsRow>
          </TagsContainer>
        </Container>
        {maxReached && (
          <SubmitButton
            onPress={() => {
              this.props.navigation.navigate('Resume', {
                userInfo: {
                  ...userInfo,
                  selfDescription: this.state.skills.join(', '),
                },
              })
            }}
            buttonText="CONTINUE"
          />
        )}
      </ScreenContainer>
    )
  }
}
