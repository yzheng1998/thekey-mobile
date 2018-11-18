import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { ScreenContainer, ContentContainer, Button, ButtonText } from './styles'
import Header from '../../components/Header'
import SubmitButton from '../../components/SubmitButton'
import { ethnicityOptions } from './constants'

import { connect } from 'react-redux'
import { updateEthnicities } from '../../redux/actions/membershipApplication'

const mapStateToProps = state => ({
  firstName: state.membershipApplication.firstName,
  ethnicities: state.membershipApplication.ethnicities,
})

const mapDispatchToProps = {
  updateEthnicities,
}

class EthnicitiesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ethnicities: props.ethnicities || [],
    }
  }

  updateText = obj => {
    this.setState(obj)
  }

  removeEthnicity = ethnicity => {
    this.setState({
      ethnicities: this.state.ethnicities.filter(e => e !== ethnicity),
    })
  }

  handleEthnicityPress = ethnicity => {
    if (ethnicity === 'DECLINE' || this.state.ethnicities.includes('DECLINE')) {
      this.setState({ ethnicities: [ethnicity] })
    } else if (this.state.ethnicities.includes(ethnicity)) {
      this.removeEthnicity(ethnicity)
    } else {
      this.setState({
        ethnicities: [...this.state.ethnicities, ethnicity],
      })
    }
  }

  findLabel = (value, arr) => arr.find(el => el.value === value).label

  render() {
    const disabled = this.state.ethnicities.length === 0
    return (
      <ScreenContainer>
        <ContentContainer>
          <ScrollView keyboardShouldPersistTaps="always">
            <Header
              title="Which race best describes you?"
              showBack
              onBackPress={() => this.props.navigation.goBack()}
              progress="28.5%"
            />
            <View>
              {ethnicityOptions.map(option => (
                <Button
                  key={option.value}
                  clicked={this.state.ethnicities.includes(option.value)}
                  onPress={() => this.handleEthnicityPress(option.value)}
                >
                  <ButtonText>{option.label}</ButtonText>
                </Button>
              ))}
            </View>
          </ScrollView>
        </ContentContainer>
        <SubmitButton
          buttonText="NEXT"
          disabled={disabled}
          onPress={() => {
            this.props.updateEthnicities({
              ethnicities: this.state.ethnicities,
            })
            this.props.navigation.navigate('Education')
          }}
        />
      </ScreenContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EthnicitiesScreen)
