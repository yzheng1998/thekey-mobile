import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import { ScreenContainer, GenderButton, ButtonText } from './styles'
import Header from '../../components/Header'
import SubmitButton from '../../components/SubmitButton'
import { connect } from 'react-redux'
import { updateGender } from '../../redux/actions/membershipApplication'
import MoreOptionsButton from './components/MoreOptionsButton'

const mapStateToProps = state => ({
  firstName: state.membershipApplication.firstName,
  gender: state.membershipApplication.gender,
})

const mapDispatchToProps = {
  updateGender,
}

class GenderScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: props.gender || '',
    }
  }

  updateText = obj => {
    this.setState(obj)
  }

  findLabel = (value, arr) => arr.find(el => el.value === value).label

  render() {
    const showNext = !!this.state.gender
    return (
      <ScreenContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView keyboardShouldPersistTaps="always">
            <Header
              title="Which gender best describes you?"
              showBack
              onBackPress={() => this.props.navigation.goBack()}
              progress="55%"
            />
            <View>
              <GenderButton
                key="MALE"
                clicked={this.state.gender === 'MALE'}
                onPress={() => this.setState({ gender: 'MALE' })}
              >
                <ButtonText>Male</ButtonText>
              </GenderButton>

              <GenderButton
                key="FEMALE"
                clicked={this.state.gender === 'FEMALE'}
                onPress={() => this.setState({ gender: 'FEMALE' })}
              >
                <ButtonText>Female</ButtonText>
              </GenderButton>
              <MoreOptionsButton
                updateGender={gender => this.setState({ gender })}
                currentGender={this.state.gender}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
        {showNext && (
          <SubmitButton
            buttonText="NEXT"
            onPress={() => {
              this.props.updateGender({ gender: this.state.gender })
              this.props.navigation.navigate('Ethnicities')
            }}
          />
        )}
      </ScreenContainer>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenderScreen)
