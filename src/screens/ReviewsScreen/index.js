import React, { Component } from 'react'
import { FlatList, ScrollView } from 'react-native'
import ReviewCard from '../../components/ReviewCard'
import SearchFilterTab from '../../components/SearchFilterTab'
import { HeaderBackground, Title, BackButtonContainer } from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'
import SearchBar from '../../components/SearchBar'

class ReviewsScreen extends Component {
  state = {
    searchText: '',
  }

  updateText = searchText => {
    this.setState({ searchText })
  }

  render() {
    const { searchText } = this.state
    const { reviews } = this.props
    return (
      <ScrollView>
        <HeaderBackground>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={27} color="white" />
          </BackButtonContainer>
          <Title>Reviews</Title>
          <SearchFilterTab options={['All', 'Saved', 'Highest Rate']} />
        </HeaderBackground>
        <SearchBar
          updateText={this.updateText}
          searchText={searchText}
          placeholderText="Search All Reviews"
        />
        <FlatList
          keyExtractor={review => review.id}
          data={reviews}
          renderItem={({ item: review }) => <ReviewCard review={review} />}
        />
      </ScrollView>
    )
  }
}

export default ReviewsScreen
