import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import LinkedInModal from 'react-native-linkedin'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import LinkedInIcon from 'react-native-vector-icons/Entypo'
import {
  LinkedInButtonText,
  LinkedInButton,
  LinkedInLogoContainer,
  RowContainer,
} from './styles'
import { LinkedInClientID, LinkedInRedirectUri } from '../../../../../config'

const GET_LINKEDIN_INFO = gql`
  mutation getLinkedInInfo($authorizationCode: String!) {
    getLinkedInInfo(authorizationCode: $authorizationCode) {
      linkedInId
      firstName
      lastName
      email
      error {
        message
      }
    }
  }
`
export default class LinkedInRegisterButton extends Component {
  render() {
    return (
      <Mutation
        mutation={GET_LINKEDIN_INFO}
        onCompleted={async data => {
          const {
            linkedInId,
            error,
            firstName,
            lastName,
            email,
          } = data.getLinkedInInfo
          if (error) {
            Alert.alert('Error Occurred', 'Could not log in with LinkedIn')
          } else {
            this.props.navigation.navigate('PersonalDetails', {
              userInfo: {
                linkedInId,
                firstName,
                lastName,
                email,
                password: '',
              },
            })
          }
        }}
      >
        {(getLinkedInInfo, { loading, error }) => (
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
                getLinkedInInfo({ variables: { authorizationCode } })
              }
              renderButton={() => null}
            />
            <LinkedInButton onPress={() => this.modal.open()}>
              <RowContainer>
                <LinkedInLogoContainer>
                  <LinkedInIcon name="linkedin" size={15} color="white" />
                </LinkedInLogoContainer>
              </RowContainer>
              <LinkedInButtonText>Continue with LinkedIn</LinkedInButtonText>
            </LinkedInButton>
            {loading && <Text>Logging you in...</Text>}
            {error && <Text>Server error</Text>}
          </View>
        )}
      </Mutation>
    )
  }
}
