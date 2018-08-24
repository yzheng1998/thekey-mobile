import React, { Component } from 'react'
import {
  Text,
  View,
  AsyncStorage,
  TouchableHighlight,
  Alert,
} from 'react-native'
import LinkedInModal from 'react-native-linkedin'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import LinkedInIcon from 'react-native-vector-icons/Ionicons'
import config from '../../../../../config'

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
              clientID={config.LinkedInClientID}
              redirectUri={config.LinkedInRedirectUri}
              shouldGetAccessToken={false}
              onSuccess={authorizationCode =>
                linkedinLogin({ variables: { authorizationCode } })
              }
              renderButton={() => null}
            />
            <TouchableHighlight onPress={() => this.modal.open()}>
              <LinkedInIcon
                name="logo-linkedin"
                size={30}
                color="rgb(0, 120, 183)"
              />
            </TouchableHighlight>
            {loading && <Text>Logging you in...</Text>}
            {data &&
              data.linkedinLogin.error && (
                <Text>{data.linkedinLogin.error.message}</Text>
              )}
            {error &&
              Alert.alert(
                'Failed to log in',
                'There was an error logging you in. Please try again.',
                [{ text: 'OK', onPress: () => {} }],
                { cancelable: true },
              )}
          </View>
        )}
      </Mutation>
    )
  }
}

export default LinkedInLoginButton
