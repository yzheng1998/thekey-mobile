import React, { Component } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import JobCard from '../../components/JobCard'
import {
  HeaderBackground,
  Title,
  BackButtonContainer,
  CardDivider,
} from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'

class SimilarJobsScreen extends Component {
  render() {
    const data = this.props.navigation.getParam('data')
    const jobs = data.similarJobs
    return (
      <ScrollView>
        <HeaderBackground>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton name="ios-arrow-back" size={33} color="white" />
          </BackButtonContainer>
          <Title>Similar Jobs</Title>
        </HeaderBackground>
        <FlatList
          keyExtractor={job => job.id}
          data={jobs}
          renderItem={({ item: job }) => (
            <View>
              <JobCard
                navigate={id => this.props.navigation.push('Job', { id })}
                job={job}
              />
              <CardDivider />
            </View>
          )}
        />
      </ScrollView>
    )
  }
}

export default SimilarJobsScreen
