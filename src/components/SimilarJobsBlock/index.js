import React, { Component } from 'react'
import { Container, Title, JobContainer, Header, SeeAll } from './styles'
import JobCard from '../../components/JobCard'
import { FlatList } from 'react-native'

class SimilarJobsBlock extends Component {
  render() {
    const { jobs } = this.props
    return (
      <Container>
        <Header>
          <Title>Similar Jobs</Title>
          <SeeAll>See All</SeeAll>
        </Header>
        <FlatList
          horizontal
          keyExtractor={jobsarr => jobsarr.id}
          data={jobs}
          renderItem={({ item }) => (
            <JobContainer>
              <JobCard
                job={item}
                width="300px"
                height="102px"
                activeOpacity={0.5}
                borderRadius={20}
              />
            </JobContainer>
          )}
        />
      </Container>
    )
  }
}

export default SimilarJobsBlock
