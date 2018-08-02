import React, { Component } from 'react'
import {
  Container,
  Scroll,
  InstructionsContainer,
  Instructions,
  EssayInput,
} from './styles'
import Header from '../../components/Header'
import SubmitButton from '../../components/SubmitButton'
import { SafeAreaView } from 'react-native'

import nodeEmoji from 'node-emoji'

class EssayScreen extends Component {
  state = {
    essay: '',
  }
  render() {
    const userInfo = this.props.navigation.getParam('userInfo')
    const disabled = !this.state.essay.length
    return (
      <Container behavior="padding" enabled>
        <SafeAreaView style={{ backgroundColor: 'white' }} />
        <Scroll>
          <Header
            title={`Initiation ${nodeEmoji.get('sunglasses')}`}
            showBack
            onBackPress={() => this.props.navigation.goBack()}
            progress="57.1%"
          />
          <InstructionsContainer>
            <Instructions>What do you feel you will best add to</Instructions>
            <Instructions>The Key community?</Instructions>
          </InstructionsContainer>
          <EssayInput
            value={this.state.essay}
            onChangeText={text => this.setState({ essay: text })}
            multiline
            autoGrow={false}
          />
        </Scroll>
        {!disabled && (
          <SubmitButton
            onPress={() =>
              this.props.navigation.navigate('Interests', {
                userInfo: {
                  ...userInfo,
                  essay: this.state.essay,
                },
              })
            }
            buttonText="CONTINUE"
          />
        )}
      </Container>
    )
  }
}

export default EssayScreen
