import React, { Component } from 'react'
import { View, Alert } from 'react-native'
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
import LoadingWrapper from '../../../../components/LoadingWrapper'
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
              <LinkedInLogoContainer>
                <LinkedInIcon name="linkedin" size={25} color="white" />
              </LinkedInLogoContainer>
              <TextContainer>
                <LinkedInButtonText>Continue with LinkedIn</LinkedInButtonText>
              </TextContainer>
            </LinkedInButton>
            {loading && <LoadingWrapper loading />}
            {error &&
              Alert.alert('There was an error registering you using LinkedIn.')}
          </View>
        )}
      </Mutation>
    )
  }
}
