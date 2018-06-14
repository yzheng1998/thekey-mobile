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
        />
        <DiscoverCard
          title="Jobs/Internships"
          description="View jobs posted on the site"
          image={placeholder}
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
        />
      </Background>
    )
  }
}

export default DiscoverScreen
