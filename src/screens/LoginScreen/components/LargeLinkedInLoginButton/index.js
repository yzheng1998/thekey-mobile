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
} from './styles'
import { LinkedInClientID, LinkedInRedirectUri } from '../../../../../config'
import LoadingWrapper from '../../../../components/LoadingWrapper'

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
class LargeLinkedInLoginButton extends Component {
  render() {
    return (
      <Mutation
        mutation={LINKEDIN_LOGIN}
        onCompleted={async data => {
          const {
            linkedinLogin: { token, user },
          } = data
          if (!data.linkedinLogin.error) {
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
                <LinkedInIcon name="linkedin" size={25} color="white" />
              </LinkedInLogoContainer>
              <LinkedInButtonText>Sign in with LinkedIn</LinkedInButtonText>
            </LinkedInButton>
            {loading && <LoadingWrapper loading />}
            {data &&
              data.linkedinLogin.error &&
              Alert.alert(
                'Error signing in with LinkedIn',
                data.linkedinLogin.error.message,
              )}
            {error && Alert.alert('Error signing in with LinkedIn')}
          </View>
        )}
      </Mutation>
    )
  }
}

export default LargeLinkedInLoginButton
