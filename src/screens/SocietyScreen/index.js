import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Dimensions } from 'react-native'
import SocietyHeader from './components/SocietyHeader'
import CardSwiper from './components/CardSwiper'
import { SwiperContainer, Background } from './styles'

const { width } = Dimensions.get('window')

const GET_USERS = gql`
  query users {
    users {
      id
      firstName
      lastName
      email
      friends {
        id
        profilePicture
        firstName
        lastName
      }
    }
  }
`

class SocietyScreen extends Component {
  render() {
    return (
      <Background>
        <SocietyHeader navigation={this.props.navigation} />
        <Query query={GET_USERS}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
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
