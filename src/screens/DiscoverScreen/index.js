import React, { Component } from 'react'
import { Background, List } from './styles'
import DiscoverCard from './components/DiscoverCard'
import Header from './components/Header'
import { AsyncStorage } from 'react-native'
import PushNotification from 'react-native-push-notification'
import TheSocietyCard from '../../../assets/TheSocietyCard.png'
import JobsAndInternshipsCard from '../../../assets/JobsAndInternshipsCard.png'
import EventsCard from '../../../assets/EventsCard.png'
import ReviewsCard from '../../../assets/ReviewsCard.png'

class DiscoverScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    name: '',
    profilePicture:
      'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c508869d7645131d98c453dd9ce0ae6&auto=format&fit=crop&w=2420&q=80',
  }

  componentDidMount = async () => {
    const firstName = await AsyncStorage.getItem('firstName')
    const profilePicture = await AsyncStorage.getItem('profilePicture')
    PushNotification.requestPermissions()
    if (firstName) {
      this.setState({ name: firstName })
    }
    if (profilePicture) {
      this.setState({ profilePicture })
    }
  }

  render() {
    return (
      <Background>
        <List>
          <Header
            name={this.state.name}
            avatar={this.state.profilePicture}
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
        </List>
      </Background>
    )
  }
}

export default DiscoverScreen
