import React, { Component } from 'react'
import { Background, List } from './styles'
import DiscoverCard from './components/DiscoverCard'
import Header from './components/Header'
import { View, AsyncStorage, SafeAreaView } from 'react-native'
import PushNotification from 'react-native-push-notification'
import TheSocietyCard from '../../../assets/TheSocietyCard.png'
import JobsAndInternshipsCard from '../../../assets/JobsAndInternshipsCard.png'
import EventsCard from '../../../assets/EventsCard.png'
import ReviewsCard from '../../../assets/ReviewsCard.png'
import WelcomeCard from './components/WelcomeCard'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Share, { ShareSheet, Button } from 'react-native-share'

const EMAIL_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABC1BMVEUAAAA/Pz8/Pz9AQEA/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz9AQEA+Pj5AQEA/Pz87Ozs7Ozs/Pz8+Pj47OztAQEA/Pz89PT01NTVBQUFBQUE/Pz8/Pz8+Pj4/Pz9BQUE+Pj4/Pz8/Pz89PT0+Pj4/Pz9BQUFAQEA9PT09PT0/Pz87Ozs9PT05OTk/Pz8+Pj4/Pz9AQEA/Pz8/Pz8/Pz8/Pz+AgIA+Pj4/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz9AQEA+Pj4/Pz8+Pj4/Pz85OTk/Pz8/Pz8/Pz8/Pz88PDw9PT0/Pz88PDw8PDw+Pj45OTlktUJVAAAAWXRSTlMA/7N4w+lCWvSx8etGX/XlnmRO7+1KY/fjOGj44DU7UvndMec/VvLbLj7YKyiJdu9O7jZ6Um1w7DnzWQJz+tpE6uY9t8D9QehAOt7PVRt5q6duEVDwSEysSPRjqHMAAAEfSURBVEjH7ZTXUgIxGEa/TwURUFyKYgMURLCvbe2gYAV7ff8nMRksgEDiKl7lXOxM5p8zO3s2CWAwGAx/CjXontzT25Y+pezxtpv2+xTygJ+BYOvh4BBDwx1lKxxhNNZqNjLK+JjVWUYsykj4+2h8gpNTUMkIBuhPNE+SKU7PQC3D62E60ziYzXIuBx0Z+XRTc9F5fgF6MhKNzWXnRejKWGJdc9GZy8AP3kyurH52Ju01XTkjvnldNN+Qi03RecthfFtPlrXz8rmzi739Ax7mUCjy6FhH/vjPonmqVD6pdT718excLX/tsItLeRAqtc7VLIsFlVy/t6+ub27v7t8XD490niy3p+rZpv3i+jy/Or+5SUrdvcNcywaDwfD/vAF2TBl+G6XvQwAAAABJRU5ErkJggg=='

const MORE_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEUAAABEREQ9PT0/Pz8/Pz9AQEA7OzszMzM/Pz8/Pz9FRUU/Pz8/Pz9VVVUAAAA/Pz8+Pj4/Pz8/Pz9BQUFAQEA/Pz+e9yGtAAAAFnRSTlMAD5bv9KgaFJ/yGv+zAwGltPH9LyD5QNQoVwAAAF5JREFUSMft0EkKwCAQRFHHqEnUON3/qkmDuHMlZlVv95GCRsYAAAD+xYVU+hhprHPWjDy1koJPx+L63L5XiJQx9PQPpZiOEz3n0qs2ylZ7lkyZ9oyXzl76MAAAgD1eJM8FMZg0rF4AAAAASUVORK5CYII='

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
    completeProfile: false,
    inviteFriendModalVisible: false,
  }

  componentDidMount = async () => {
    PushNotification.requestPermissions()
  }

  onComplete = () => {
    this.setState({ completeProfileClicked: true })
  }

  toggleInviteFriendModal = () => {
    this.setState({
      inviteFriendModalVisible: !this.state.inviteFriendModalVisible,
    })
  }

  render() {
    const shareOptions = {
      title: 'React Native',
      message: 'Download The Key here: ',
      url: 'https://itunes.apple.com/us/app/the-key-society/id1397945385?mt=8',
      subject: 'Share Link',
    }

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
                  navigation={this.props.navigation}
                  completeProfileClicked={this.state.completeProfileClicked}
                  onComplete={this.onComplete}
                />
                <ShareSheet
                  visible={this.state.inviteFriendModalVisible}
                  onCancel={this.toggleInviteFriendModal}
                >
                  <Button
                    iconSrc={{ uri: EMAIL_ICON }}
                    onPress={() => {
                      this.toggleInviteFriendModal()
                    }}
                  >
                    Email
                  </Button>
                  <Button
                    iconSrc={{ uri: MORE_ICON }}
                    onPress={() => {
                      this.toggleInviteFriendModal()
                      setTimeout(() => {
                        Share.open(shareOptions)
                      }, 300)
                    }}
                  >
                    More
                  </Button>
                </ShareSheet>
              </SafeAreaView>
            )
          }}
        </Query>
      </Background>
    )
  }
}

export default DiscoverScreen
