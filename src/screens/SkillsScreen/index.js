import React, { Component } from 'react'
import RegistrationTag from '../../components/RegistrationTag'
import { SafeAreaView } from 'react-native'
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
  'SELF-MOTIVATED',
  'CONFIDENT',
  'OPTIMISTIC',
  'POSITIVE',
  'ACCOUNTABLE',
  'COURAGEOUS',
  'ENGAGED',
  'HUMOROUS',
  'PASSIONATE',
  'RESPECTABLE',
  'LIKABLE',
  'ETHICAL',
  'LOYAL',
  'CHARISMATIC',
  'THANKFUL',
  'INTELLIGENT',
  'HUMBLE',
  'DISCIPLINED',
  'RISK TAKER',
  'SELF-ASSURED',
  'MATURE',
  'EXAMPLE SETTER',
  'SOCIAL',
  'ORATOR',
  'HONEST',
  'TRANSPARENT',
  'REASONABLE',
  'BOLD',
  'LISTENER',
  'AUTHENTIC',
  'COMPASSIONATE',
  'SHREWD',
  'SAVVY',
  'TEACHER',
  'OPEN-MINDED',
  'FAITHFUL',
  'INSPIRATION',
  'PLANNER',
  'MOTIVATOR',
  'INSIGHTFUL',
  'RESPONSIBLE',
  'IMPACTFUL',
  'EVALUATIVE',
  'EFFICIENT',
  'RESPECTFUL',
  'COACH',
  'STANDARD-SETTER',
  'FAIR',
  'DECISIVE',
  'VISIONARY',
  'CONSISTENT',
  'PROACTIVE',
  'TOUGH-MINDED',
  'RESOURCEFUL',
  'GRACEFUL',
  'STREET SMART',
  'STRATEGIC',
  'FLEXIBLE',
  'ORGANIZED',
  'CREATIVE',
  'INTUITIVE',
  'BUCKEYE',
  'WISE',
  'ADVENTUROUS',
  'READER',
  'CURIOUS',
  'COMPETENT',
  'FOCUSED',
  'INTENTIONAL LEARNER',
  'CONTRIBUTOR',
  'MENTOR',
  'TEAM PLAYER',
  'KIND',
  'REBEL',
  'THOROUGH',
  'PROUD',
  'ASSERTIVE',
  'INDEPENDENT',
  'SENTIMENTAL',
  'PATIENT',
  'HIGH-ENERGY',
  'TROUBLE-MAKER',
]

const MAX_NUM_INTERESTS = 5

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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <Container>
            <Header
              title="Describe Yourself"
              showBack
              onBackPress={() => this.props.navigation.goBack()}
              progress="85.7%"
            />
            <Subtitle>
              Choose 5 options. These can be {'\n'}updated later on.
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
        </SafeAreaView>
      </ScreenContainer>
    )
  }
}
