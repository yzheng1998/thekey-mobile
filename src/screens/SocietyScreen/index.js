import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Dimensions, StatusBar } from 'react-native'
import SocietyHeader from './components/SocietyHeader'
import CardSwiper from './components/CardSwiper'
import OutOfMatchesCard from './components/OutOfMatchesCard'
import { Background, CardContainer, Screen } from './styles'
import SocietySearchModal from './components/SocietySearchModal'
import LoadingWrapper from '../../components/LoadingWrapper'
import MatchModal from './components/MatchModal'

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
    matchModalVisible: false,
    recipientFirstName: '',
    recipientLastName: '',
    recipientProfilePicture: '',
    senderProfilePicture: '',
    senderId: '',
    swipedAll: false,
  }

  setSwipedAll = () => {
    this.setState({ swipedAll: true })
  }

  openSearchModal = () => {
    this.setState({ searchModalVisible: true })
  }

  closeSearchModal = () => {
    this.setState({ searchModalVisible: false })
  }

  toggleMatchModal = () => {
    this.setState({ matchModalVisible: !this.state.matchModalVisible })
  }

  handleSwipe = value => {
    this.setState(value)
  }

  render() {
    const {
      senderFirstName,
      senderLastName,
      recipientProfilePicture,
      senderProfilePicture,
      matchModalVisible,
      senderId,
    } = this.state
    return (
      <Screen>
        <StatusBar barStyle="light-content" />
        <MatchModal
          createNewChat={id => {
            this.toggleMatchModal()
            this.props.navigation.navigate('Conversation', {
              chat: id,
            })
          }}
          isVisible={matchModalVisible}
          toggleMatchModal={this.toggleMatchModal}
          matchName={`${senderFirstName} ${senderLastName}`}
          recipientProfilePicture={recipientProfilePicture}
          senderProfilePicture={senderProfilePicture}
          senderId={senderId}
        />
        <SocietySearchModal
          navigation={this.props.navigation}
          isVisible={this.state.searchModalVisible}
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
                  {!this.state.swipedAll &&
                    (data.societyQuery && data.societyQuery.length > 0) && (
                      <CardSwiper
                        setSwipedAll={this.setSwipedAll}
                        toggleMatchModal={this.toggleMatchModal}
                        handleSwipe={this.handleSwipe}
                        refetch={refetch}
                        navigation={this.props.navigation}
                        width={width}
                        userData={data.societyQuery}
                      />
                    )}
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
