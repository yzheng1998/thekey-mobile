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

import { connect } from 'react-redux'
import { updateDescriptions } from '../../redux/actions/membershipApplication'

const mapStateToProps = state => ({
  descriptions: state.membershipApplication.selfDescription,
})

const mapDispatchToProps = {
  updateDescriptions,
}

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

class DescriptionsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descriptions: props.descriptions ? props.descriptions.split(', ') : [],
    }
  }

  toggleDescription = description => {
    const { descriptions } = this.state
    if (descriptions.includes(description)) {
      this.setState({
        descriptions: this.state.descriptions.filter(el => el !== description),
      })
    } else
      this.setState({
        descriptions: [...this.state.descriptions, description],
      })
  }

  render() {
    const maxReached = this.state.descriptions.length >= MAX_NUM_INTERESTS
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
                    disable={
                      maxReached && !this.state.descriptions.includes(tag)
                    }
                    selected={this.state.descriptions.includes(tag)}
                    onPress={this.toggleDescription}
                  />
                ))}
              </TagsRow>
            </TagsContainer>
          </Container>
          {maxReached && (
            <SubmitButton
              onPress={() => {
                this.props.updateDescriptions({
                  descriptions: this.state.descriptions.join(', '),
                })
                this.props.navigation.navigate('Resume')
              }}
              buttonText="CONTINUE"
            />
          )}
        </SafeAreaView>
      </ScreenContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DescriptionsScreen)
