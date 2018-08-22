import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Dimensions, StatusBar } from 'react-native'
import SocietyHeader from './components/SocietyHeader'
import CardSwiper from './components/CardSwiper'
import OutOfMatchesCard from './components/OutOfMatchesCard'
import { SwiperContainer, Background, CardContainer, Screen } from './styles'
import SocietySearchModal from './components/SocietySearchModal'
import LoadingWrapper from '../../components/LoadingWrapper'

const { width } = Dimensions.get('window')

const GET_SOCIETY_USERS = gql`
  query societyQuery {
    societyQuery {
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
      mutualFriends {
        id
        profilePicture
        firstName
        lastName
      }
      tags {
        id
        name
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
      <Screen>
        <StatusBar barStyle="light-content" />
        <SocietySearchModal
          navigation={this.props.navigation}
          visible={this.state.searchModalVisible}
          closeModal={this.closeSearchModal}
        />
        <Background
          snapToAlignment="end"
          alwaysBounceVertical={false}
          showVerticalScrollIndicator={false}
        >
          <SocietyHeader
            navigation={this.props.navigation}
            openModal={this.openSearchModal}
          />
          <CardContainer>
            <Query query={GET_SOCIETY_USERS} fetchPolicy="network-only">
              {({ loading, data, refetch }) => (
                <LoadingWrapper loading={loading}>
                  <SwiperContainer>
                    <CardSwiper
                      refetch={refetch}
                      navigation={this.props.navigation}
                      width={width}
                      userData={data.societyQuery}
                    />
                  </SwiperContainer>
                  <OutOfMatchesCard navigation={this.props.navigation} />
                </LoadingWrapper>
              )}
            </Query>
          </CardContainer>
        </Background>
      </Screen>
    )
  }
}

export default SocietyScreen
