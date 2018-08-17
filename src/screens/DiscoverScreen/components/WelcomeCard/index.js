import React, { Component } from 'react'
import welcomeGraphic from '../../../../../assets/welcomeGraphic.png'
import RegisterButton from '../../../../components/RegisterButton'
import {
  Card,
  Title,
  Subtitle,
  Image,
  ButtonText,
  CardContainer,
} from '../../styles'
import { View, TouchableOpacity } from 'react-native'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const SET_HAS_LOGGED_IN = gql`
  mutation setHasLoggedIn {
    setHasLoggedIn
  }
`

export default class WelcomeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showWelcomeCard: props.showWelcomeCard,
      loading: true,
    }
  }

  render() {
    const {
      navigation,
      completeProfileClicked,
      onComplete,
      refetch,
      firstName,
    } = this.props
    const laterText = "I'll do it later"
    return (
      <Card
        isVisible={this.state.showWelcomeCard}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.4}
        onModalHide={() => {
          if (completeProfileClicked) {
            navigation.navigate('EditProfile')
          }
        }}
      >
        <CardContainer>
          <Image source={welcomeGraphic} />
          <Title>Congrats {firstName}!</Title>
          <Subtitle>
            You have just been accepted to the key! Get ready to connect,
            discover, and share!
          </Subtitle>
          <Mutation
            mutation={SET_HAS_LOGGED_IN}
            onCompleted={() => {
              refetch()
              this.setState({ showWelcomeCard: false })
            }}
          >
            {setHasLoggedIn => (
              <View>
                <RegisterButton
                  secondary
                  onPress={() => {
                    setHasLoggedIn()
                    onComplete()
                  }}
                  buttonText="COMPLETE YOUR PUBLIC PROFILE"
                />
                <TouchableOpacity
                  onPress={() => {
                    setHasLoggedIn()
                  }}
                >
                  <ButtonText>{laterText}</ButtonText>
                </TouchableOpacity>
              </View>
            )}
          </Mutation>
        </CardContainer>
      </Card>
    )
  }
}
