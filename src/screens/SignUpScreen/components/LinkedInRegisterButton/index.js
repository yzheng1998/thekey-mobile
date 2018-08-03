import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
          const { linkedInId, error } = data.getLinkedInInfo
        }}
      >
        {(getLinkedInInfo, { loading, data, error }) => (
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
            {console.log('data', data)}
            {error && <Text>Server error</Text>}
          </View>
        )}
      </Mutation>
    )
  }
}
