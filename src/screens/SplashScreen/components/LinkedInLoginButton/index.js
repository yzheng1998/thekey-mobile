import React, { Component } from 'react'
import { View, AsyncStorage, Alert } from 'react-native'
import LinkedInModal from 'react-native-linkedin'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import LinkedInIcon from 'react-native-vector-icons/Entypo'
import {
  LinkedInButtonText,
  LinkedInButton,
  LinkedInLogoContainer,
  TextContainer,
} from './styles'
import { LinkedInClientID, LinkedInRedirectUri } from '../../../../../config'

const LINKEDIN_LOGIN = gql`
  mutation linkedinLogin($authorizationCode: String!) {
    linkedinLogin(authorizationCode: $authorizationCode) {
      user {
        id
        firstName
        profilePicture
      }
      token
      error {
        message
      }
    }
  }
`
class LinkedInLoginButton extends Component {
  render() {
    return (
      <Mutation
        mutation={LINKEDIN_LOGIN}
        onCompleted={async data => {
          const {
            linkedinLogin: { token, user, error },
          } = data
          if (!error) {
            await AsyncStorage.setItem('token', token)
            await AsyncStorage.setItem('userId', user.id)
            await AsyncStorage.setItem('firstName', user.firstName)
            this.props.navigation.navigate('MainTab')
          }
        }}
        onError={() => {
          Alert.alert(
            'Failed to log in',
            'There was an error logging you in. Please try again.',
            [{ text: 'OK', onPress: () => {} }],
            { cancelable: true },
          )
        }}
      >
        {linkedinLogin => (
          <View>
            <LinkedInModal
              ref={ref => {
                this.modal = ref
              }}
              clientSecret="" // Required prop
              clientID={LinkedInClientID}
              redirectUri={LinkedInRedirectUri}
              shouldGetAccessToken={false}
              onSuccess={authorizationCode =>
                linkedinLogin({ variables: { authorizationCode } })
              }
              renderButton={() => null}
            />
            <LinkedInButton onPress={() => this.modal.open()}>
              <LinkedInLogoContainer>
                <LinkedInIcon name="linkedin" size={30} color="white" />
              </LinkedInLogoContainer>
              <TextContainer>
                <LinkedInButtonText>Sign in with LinkedIn</LinkedInButtonText>
              </TextContainer>
            </LinkedInButton>
          </View>
        )}
      </Mutation>
    )
  }
}

export default LinkedInLoginButton
