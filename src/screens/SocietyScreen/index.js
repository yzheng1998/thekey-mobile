import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Dimensions, Text } from 'react-native'
import SocietyHeader from './components/SocietyHeader'
import CardSwiper from './components/CardSwiper'
import { SwiperContainer, Background } from './styles'
import SocietySearchModal from './components/SocietySearchModal'

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
  state = {
    searchModalVisible: false,
  }

  openSearchModal = () => {
    this.setState({ searchModalVisible: true })
  }

  closeSearchModal = () => {
    this.setState({ searchModalVisible: false })
  }

  render() {
    return (
      <Background>
        <SocietySearchModal
          visible={this.state.searchModalVisible}
          closeModal={this.closeSearchModal}
        />
        <SocietyHeader
          navigation={this.props.navigation}
          openModal={this.openSearchModal}
        />
        <Query query={GET_USERS}>
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
