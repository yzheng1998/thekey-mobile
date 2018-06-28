import React, { Component } from 'react'
import {
  Container,
  TagsContainer,
  BackButtonContainer,
  StarContainer,
} from './styles'
import JobPictureBlock from '../../components/JobPictureBlock'
import AboutBlock from '../../components/AboutBlock'
import TagLine from '../../components/TagLine'
import SimilarJobsBlock from '../../components/SimilarJobsBlock'
import BackButton from 'react-native-vector-icons/Ionicons'
import Star from 'react-native-vector-icons/Feather'

const tagData = [
  {
    name: 'Headphones',
    image: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
  {
    name: 'Tech',
    image: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
  {
    name: 'Leadership',
    image: {
      uri:
        'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
    },
  },
]

class JobScreen extends Component {
  render() {
    const {
      about,
      picture,
      title,
      company,
      commitment,
      location,
      time,
      views,
      jobs,
    } = this.props
    return (
      <Container>
        <JobPictureBlock
          navigation={this.props.navigation}
          picture={picture}
          title={title}
          company={company}
          commitment={commitment}
          location={location}
          views={views}
          time={time}
        />
        <AboutBlock about={about} />
        <TagsContainer>
          <TagLine tagData={tagData} lines={1} />
        </TagsContainer>
        <SimilarJobsBlock jobs={jobs} />
        <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
          <BackButton name="ios-arrow-back" size={27} color="white" />
        </BackButtonContainer>
        <StarContainer>
          <Star name="star" size={27} color="white" />
        </StarContainer>
      </Container>
    )
  }
}

export default JobScreen
