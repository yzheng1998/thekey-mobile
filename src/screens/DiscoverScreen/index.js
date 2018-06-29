import React, { Component } from 'react'
import { Background, List } from './styles'
import DiscoverCard from './components/DiscoverCard'
import Header from './components/Header'
import placeholder from '../../../assets/city.png'
import { AsyncStorage } from 'react-native'

class DiscoverScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  state = {
    name: '',
  }

  componentDidMount = async () => {
    const firstName = await AsyncStorage.getItem('firstName')
    if (firstName) {
      this.setState({ name: firstName })
    }
  }

  render() {
    return (
      <Background>
        <List>
          <Header
            name={this.state.name}
            avatar={placeholder}
            navigation={this.props.navigation}
          />
          <DiscoverCard
            title="The Society"
            description="View other users on the site"
            image={placeholder}
            onPress={() => this.props.navigation.navigate('Society')}
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
            onPress={() => this.props.navigation.navigate('Reviews')}
          />
        </List>
      </Background>
    )
  }
}

export default DiscoverScreen
