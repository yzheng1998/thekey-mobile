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
} from './styles'
import LoadingWrapper from '../../../../components/LoadingWrapper'
import { LinkedInClientID, LinkedInRedirectUri } from '../../../../../config'

import { connect } from 'react-redux'
import { updateLinkedInInfo } from '../../../../redux/actions/membershipApplication'

const mapDispatchToProps = {
  updateLinkedInInfo,
}

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

class LinkedInRegisterButton extends Component {
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
            const userInfo = {
              linkedInId,
              firstName,
              lastName,
              email,
              password: '',
            }
            this.props.updateLinkedInInfo(userInfo)
            this.props.navigation.navigate('Introduction')
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
              <LinkedInButtonText>Continue with LinkedIn</LinkedInButtonText>
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

export default connect(
  null,
  mapDispatchToProps,
)(LinkedInRegisterButton)
