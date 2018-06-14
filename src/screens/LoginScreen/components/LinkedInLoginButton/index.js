import React, { Component } from 'react'
import {
  Text,
  View,
  AsyncStorage,
  TouchableHighlight,
  Image,
} from 'react-native'
import LinkedInButton from './SignInWithLinkedIn.png'
import LinkedInModal from 'react-native-linkedin'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const LINKEDIN_LOGIN = gql`
  mutation linkedinLogin($authorizationCode: String!) {
    linkedinLogin(authorizationCode: $authorizationCode) {
      user {
        id
        firstName
      }
      token
      error {
        message
      }
    }
  }
`
const clientID = '7741ysuwp6w3ty'
const redirectUri = 'http://localhost:3000/auth/linkedin'
class LinkedInLoginButton extends Component {
  render() {
    return (
      <Mutation
        mutation={LINKEDIN_LOGIN}
        onCompleted={async data => {
          const {
            linkedinLogin: { token, user },
          } = data
          if (!data.loginUser.error) {
            await AsyncStorage.setItem('token', token)
            await AsyncStorage.setItem('userId', user.id)
            this.props.navigation.navigate('MainTab')
          }
        }}
      >
        {(linkedinLogin, { loading, data, error }) => (
          <View>
            <LinkedInModal
              ref={ref => {
                this.modal = ref
              }}
              clientSecret="" // Required prop
              clientID={clientID}
              redirectUri={redirectUri}
              shouldGetAccessToken={false}
              onSuccess={authorizationCode =>
                linkedinLogin({ variables: { authorizationCode } })
              }
              renderButton={() => null}
            />
            <TouchableHighlight onPress={() => this.modal.open()}>
              <Image source={LinkedInButton} />
            </TouchableHighlight>
            {loading && <Text>Logging you in...</Text>}
            {data &&
              data.linkedinLogin.error && (
                <Text>{data.linkedinLogin.error.message}</Text>
              )}
            {error && <Text>Server error</Text>}
          </View>
        )}
      </Mutation>
    )
  }
}

export default LinkedInLoginButton
