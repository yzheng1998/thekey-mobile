import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Dimensions, Text } from 'react-native'
import SocietyHeader from './components/SocietyHeader'
import CardSwiper from './components/CardSwiper'
import { SwiperContainer, Background } from './styles'

const { width } = Dimensions.get('window')

const GET_USERS = gql`
  query users($usersFilterInput: UsersFilterInput!) {
    users(usersFilterInput: $usersFilterInput) {
      id
      firstName
      lastName
      email
      demographics {
        hometown
      }
      profilePicture
      bio
      friends {
        id
        profilePicture
        firstName
        lastName
      }
      tags {
        name
      }
    }
  }
`

class SocietyScreen extends Component {
  render() {
    return (
      <Background>
        <SocietyHeader navigation={this.props.navigation} />
        <Query query={GET_USERS} variables={{ usersFilterInput: {} }}>
          {({ loading, error, data }) => {
            if (loading) return <Text>`Loading...`</Text>
            if (error) return <Text>`Error! ${error.message}`</Text>
            return (
              <SwiperContainer>
                <CardSwiper
                  navigation={this.props.navigation}
                  width={width}
                  data={data}
                />
              </SwiperContainer>
            )
          }}
        </Query>
      </Background>
    )
  }
}

export default SocietyScreen
