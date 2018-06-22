import React, { Component } from 'react'
import { Background, List } from './styles'
import DiscoverCard from './components/DiscoverCard'
import Header from './components/Header'
import placeholder from '../../../assets/city.png'

class DiscoverScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Discover',
  }

  render() {
    return (
      <Background>
        <Header name="SAM" avatar={placeholder} />
        <List>
          <DiscoverCard
            title="The Society"
            description="View other users on the site"
            image={placeholder}
            onPress={() => this.props.navigation.navigate('Users')}
          />
          <DiscoverCard
            title="Jobs/Internships"
            description="View jobs posted on the site"
            image={placeholder}
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
          />
        </List>
      </Background>
    )
  }
}

export default DiscoverScreen
