import React, { Component } from 'react'
import { Background } from './styles'
import DiscoverCard from './components/DiscoverCard'
import placeholder from '../../../assets/city.png'

class DiscoverScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Discover',
  }

  render() {
    return (
      <Background>
        <DiscoverCard
          title="The Society"
          description="View other users on the site"
          image={placeholder}
<<<<<<< HEAD
=======
          onPress={() => this.props.navigation.navigate('Users')}
>>>>>>> Feature/DiscoverCardNavigation
        />
        <DiscoverCard
          title="Jobs/Internships"
          description="View jobs posted on the site"
          image={placeholder}
<<<<<<< HEAD
        />
        <DiscoverCard
          title="Events"
          description="View events posted on the site"
          image={placeholder}
        />
        <DiscoverCard
          title="Reviews"
          description="Review companies on the site"
          image={placeholder}
=======
          onPress={() => this.props.navigation.navigate('Jobs')}
        />
        <DiscoverCard
          title="Events"
          description="View events posted on the site"
          image={placeholder}
          onPress={() => this.props.navigation.navigate('Events')}
        />
        <DiscoverCard
          title="Reviews"
          description="Review companies on the site"
          image={placeholder}
          // Navigate to a random page (no reviews page yet)
          onPress={() => this.props.navigation.navigate('Events')}
>>>>>>> Feature/DiscoverCardNavigation
        />
      </Background>
    )
  }
}

export default DiscoverScreen
