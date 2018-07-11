import React, { Component } from 'react'
import {
  Container,
  TagsContainer,
  BackButtonContainer,
  StarContainer,
} from './styles'
import JobPictureBlock from '../../components/JobPictureBlock'
import AboutBlock from './components/AboutBlock'
import TagLine from '../../components/TagLine'
import SimilarJobsBlock from '../../components/SimilarJobsBlock'
import BackButton from 'react-native-vector-icons/Ionicons'
import Star from 'react-native-vector-icons/Feather'
import StarClicked from 'react-native-vector-icons/FontAwesome'

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

const job = {
  picture: {
    uri:
      'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
  },
  title: 'General Manager',
  company: '@ Beats By Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  deadline: '06/31/2018',
  tags: [],
}

const aboutJob = {
  about:
    'The Inbound General Manager manages and leads a team to ensure that customer services meet client needs as well as the standards of a national service delivery model.',
  picture: {
    uri:
      'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
  },
  title: 'General Manager',
  company: '@Beats by Dre',
  commitment: 'Full time',
  location: 'SF Bay Area',
  views: '60',
  time: '06/20/2018',
  jobs: [job, job, job],
}

class JobScreen extends Component {
  static defaultProps = {
    job: aboutJob,
  }
  constructor(props) {
    super(props)
    this.state = { isInterested: false }
  }
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
    } = this.props.job
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
        <AboutBlock navigation={this.props.navigation} about={about} />
        <TagsContainer>
          <TagLine tagData={tagData} lines={1} />
        </TagsContainer>
        <SimilarJobsBlock navigation={this.props.navigation} jobs={jobs} />
        <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
          <BackButton name="ios-arrow-back" size={27} color="white" />
        </BackButtonContainer>
        <StarContainer
          onPress={() =>
            this.setState({ isInterested: !this.state.isInterested })
          }
        >
          {this.state.star ? (
            <StarClicked name="star" size={27} color="white" />
          ) : (
            <Star name="star" size={27} color="white" />
          )}
        </StarContainer>
      </Container>
    )
  }
}

export default JobScreen
