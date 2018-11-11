import React, { Component } from 'react'
import { Background, List } from './styles'
import DiscoverCard from './components/DiscoverCard'
import Header from './components/Header'
import { View, AsyncStorage, SafeAreaView } from 'react-native'
import TheSocietyCard from '../../../assets/TheSocietyCard.png'
import JobsAndInternshipsCard from '../../../assets/JobsAndInternshipsCard.png'
import EventsCard from '../../../assets/EventsCard.png'
import ReviewsCard from '../../../assets/ReviewsCard.png'
import WelcomeCard from './components/WelcomeCard'
import NotificationCard from './components/NotificationCard'
import CompleteCard from './components/CompleteCard'
import ShareMenu from './components/ShareMenu'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_HAS_LOGGED_IN = gql`
  query viewer {
    viewer {
      ... on User {
        id
        firstName
        hasLoggedIn
      }
    }
  }
`

class DiscoverScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    name: '',
    profilePicture:
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c508869d7645131d98c453dd9ce0ae6&auto=format&fit=crop&w=2420&q=80',
    inviteFriendModalVisible: false,
    showNotificationCard: false,
    showCompleteCard: false,
  }

  toggleInviteFriendModal = () => {
    this.setState({
      inviteFriendModalVisible: !this.state.inviteFriendModalVisible,
    })
  }

  toggleNotificationCard = () => {
    this.setState({ showNotificationCard: !this.state.showNotificationCard })
  }

  toggleCompleteCard = () => {
    this.setState({ showCompleteCard: !this.state.showCompleteCard })
  }

  render() {
    return (
      <Background>
        <Query query={GET_HAS_LOGGED_IN}>
          {({ loading, data, error, refetch }) => {
            if (loading) return <View />
            if (error || !data.viewer) AsyncStorage.clear()
            return (
              <SafeAreaView style={{ flex: 1 }}>
                <List>
                  <Header
                    toggleInviteFriendModal={this.toggleInviteFriendModal}
                    name={data.viewer.firstName}
                    navigation={this.props.navigation}
                  />
                  <DiscoverCard
                    title="The Society"
                    description="Connect with others on The Key"
                    image={TheSocietyCard}
                    onPress={() => this.props.navigation.navigate('Society')}
                  />
                  <DiscoverCard
                    title="Jobs/Internships"
                    description="View jobs posted on The Key"
                    image={JobsAndInternshipsCard}
                    onPress={() => this.props.navigation.navigate('Jobs')}
                  />
                  <DiscoverCard
                    title="Events"
                    description="View events posted on The Key"
                    image={EventsCard}
                    onPress={() => this.props.navigation.navigate('Events')}
                  />
                  <DiscoverCard
                    title="Reviews"
                    description="Review companies using The Key"
                    image={ReviewsCard}
                    onPress={() => this.props.navigation.navigate('Reviews')}
                  />
                  <View style={{ height: 44 }} />
                </List>
                <WelcomeCard
                  refetch={refetch}
                  firstName={data.viewer.firstName}
                  showWelcomeCard={!data.viewer.hasLoggedIn}
                  toggleNotificationCard={this.toggleNotificationCard}
                />
                <NotificationCard
                  isVisible={this.state.showNotificationCard}
                  firstName={data.viewer.firstName}
                  toggleNotificationCard={this.toggleNotificationCard}
                  toggleCompleteCard={this.toggleCompleteCard}
                />
                <CompleteCard
                  refetch={refetch}
                  isVisible={this.state.showCompleteCard}
                  navigation={this.props.navigation}
                  toggleCompleteCard={this.toggleCompleteCard}
                />
                <ShareMenu
                  visible={this.state.inviteFriendModalVisible}
                  toggleInviteFriendModal={this.toggleInviteFriendModal}
                />
              </SafeAreaView>
            )
          }}
        </Query>
      </Background>
    )
  }
}

export default DiscoverScreen
