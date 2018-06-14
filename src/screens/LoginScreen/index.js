import React, { Component } from 'react'
import { FormLabel, FormInput } from 'react-native-elements'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Button, AsyncStorage, View } from 'react-native'
import { Message } from './styles'

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
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
class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <Mutation
        mutation={LOGIN_USER}
        onCompleted={async data => {
          const {
            loginUser: { token, user },
          } = data
          if (!data.loginUser.error) {
            await AsyncStorage.setItem('token', token)
            await AsyncStorage.setItem('userId', user.id)
            this.props.navigation.navigate('MainTab')
          }
        }}
      >
        {(loginUser, { loading, data, error }) => (
          <View>
            <FormLabel>Email:</FormLabel>
            <FormInput
              onChangeText={newText => this.setState({ email: newText })}
              type="text"
              name="email"
            />
            <FormLabel>Password:</FormLabel>
            <FormInput
              onChangeText={newText => this.setState({ password: newText })}
              type="password"
              name="password"
            />

            {loading && <Message>Logging you in...</Message>}
            {data &&
              data.loginUser.error && (
                <Message>{data.loginUser.error.message}</Message>
              )}
            {error && <Message>Server error</Message>}

            <Button
              title="Login"
              disabled={loading}
              onPress={() => {
                const variables = {
                  email: this.state.email,
                  password: this.state.password,
                }
                loginUser({ variables })
              }}
            />
          </View>
        )}
      </Mutation>
    )
  }
}

export default LoginScreen
