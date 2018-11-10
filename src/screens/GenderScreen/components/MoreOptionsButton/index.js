import React, { Component } from 'react'
import { genderOptions } from './../../constants'
import { GenderButton, ButtonText } from './../../styles'
import { Button, MoreOptionsButtonText, ButtonWrapper } from './styles'

class MoreOptionsButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
    }
  }

  render() {
    const GenderButtons = genderOptions.map(option => (
      <GenderButton
        key={option.value}
        clicked={option.value === this.props.currentGender}
        onPress={() => this.props.updateGender(option.value)}
      >
        <ButtonText>{option.label}</ButtonText>
      </GenderButton>
    ))

    if (this.state.showOptions) {
      return <ButtonWrapper>{GenderButtons}</ButtonWrapper>
    }
    return (
      <Button
        onPress={() => {
          this.setState({ showOptions: true })
        }}
      >
        <MoreOptionsButtonText>Show Options</MoreOptionsButtonText>
      </Button>
    )
  }
}

export default MoreOptionsButton
