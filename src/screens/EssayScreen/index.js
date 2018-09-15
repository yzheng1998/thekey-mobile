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

import { connect } from 'react-redux'
import { updateEssay } from '../../redux/actions/membershipApplication'

const mapStateToProps = state => ({
  essay: state.membershipApplication.essay,
})

const mapDispatchToProps = {
  updateEssay,
}

class EssayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      essay: props.essay || '',
    }
  }

  render() {
    const essayHasWords = this.state.essay.length
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
        <SubmitButton
          onPress={() => {
            this.props.updateEssay({ essay: this.state.essay })
            this.props.navigation.navigate('Interests')
          }}
          buttonText={essayHasWords ? 'CONTINUE' : 'SKIP'}
        />
      </SafeAreaView>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EssayScreen)
