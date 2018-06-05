import React, { Component } from 'react'
import { FormLabel, FormInput } from 'react-native-elements'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Button, AsyncStorage, Text, View } from 'react-native'
import { Message } from './styles'

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      token
    }
  }
`

class RegisterScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_USER}
        onCompleted={async data => {
          const { token } = data.createUser
          await AsyncStorage.setItem('user', { token })
        }}
      >
        {(createUser, { loading, data }) => (
          <View>
            <FormLabel>First Name:</FormLabel>
            <FormInput
              onChangeText={newText => this.setState({ firstName: newText })}
              type="text"
              name="fname"
            />
            <FormLabel>Last Name:</FormLabel>
            <FormInput
              onChangeText={newText => this.setState({ lastName: newText })}
              type="text"
              name="lname"
            />
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
              name="pass"
            />
            {loading && <Text>asb</Text>}
            {data && data.error && <Message>{data.error.message}</Message>}

            <Button
              title="Submit"
              disabled={loading}
              onPress={() => {
                this.setState({ error: '' })
                const variables = {
                  createUserInput: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                  },
                }
                createUser({ variables })
              }}
            />
          </View>
        )}
      </Mutation>
    )
  }
}

export default RegisterScreen
