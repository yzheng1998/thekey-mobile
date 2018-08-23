import React, { Component } from 'react'
import {
  ScrollContainer,
  InstructionsContainer,
  Instructions,
  EssayInput,
} from './styles'
import Header from '../../components/Header'
import SubmitButton from '../../components/SubmitButton'
import { SafeAreaView, Keyboard } from 'react-native'

import nodeEmoji from 'node-emoji'

class EssayScreen extends Component {
  state = {
    essay: '',
  }
  render() {
    const userInfo = this.props.navigation.getParam('userInfo')
    const disabled = !this.state.essay.length
    return (
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}
      >
        <ScrollContainer
          scrollEnabled={false}
          keyboardShouldPersistTaps="never"
        >
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
            onBlur={Keyboard.dismiss}
            autoGrow={false}
          />
        </ScrollContainer>
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
      </SafeAreaView>
    )
  }
}

export default EssayScreen
