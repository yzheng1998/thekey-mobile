import React, { Component } from 'react'
import {
  Host,
  Card,
  LeftContainer,
  AvatarContainer,
  Deadline,
  ContentContainer,
  Title,
  Description,
  RightContainer,
  TagsContainer,
  TopContainer,
  Avatar,
} from './styles'
import TagLine from '../TagLine'
import moment from 'moment'
import questionMark from '../../stories/question-mark.jpg'
import JobStarButton from '../../components/JobStarButton'

const daysLeft = time => {
  const formattedTime = new Date(time)
  const deadline = moment(formattedTime, 'YYYY-MM-DD HH:mm:ss')
  const today = moment()
  const diff = deadline.diff(today, 'hours')
  const result = diff < 24 ? `${diff} h` : `${deadline.diff(today, 'days')} d`
  return `${result}`
}

const commitmentOptions = [
  { value: 'FULLTIME', label: 'Full-Time' },
  { value: 'PARTTIME', label: 'Part-Time' },
  { value: 'INTERNSHIP', label: 'Internship' },
]

export default class JobCard extends Component {
  constructor(props) {
    super(props)
    this.state = { isInterested: false }
  }
  select = () => {
    this.setState({ isInterested: !this.state.isInterested })
  }
  render() {
    const {
      id,
      title,
      company,
      commitment,
      location,
      tags,
      deadline,
      picture,
    } = this.props.job
    const { tagsOff, navigate } = this.props
    return (
      <Card
        onPress={() => navigate(id)}
        width={this.props.width}
        height={this.props.height}
        activeOpacity={this.props.activeOpacity}
        borderRadius={this.props.borderRadius}
      >
        <TopContainer isCard={this.props.isCard}>
          <LeftContainer>
            <AvatarContainer>
              <Avatar source={picture ? { uri: picture } : questionMark} />
              <Deadline>{daysLeft(deadline)}</Deadline>
            </AvatarContainer>
            <ContentContainer>
              <Title>{title}</Title>
              <Host>{company || 'No Associated Company'}</Host>
              <Description>
                {commitmentOptions.find(el => el.value === commitment).label} —{' '}
                {location}
              </Description>
            </ContentContainer>
          </LeftContainer>
          <RightContainer>
            <JobStarButton
              onPress={this.select}
              isInterested={this.state.isInterested}
              id={id}
              size={24}
              startColor="rgb(250, 53, 121)"
              endColor="rgb(148, 157, 170)"
            />
          </RightContainer>
        </TopContainer>
        {!tagsOff && (
          <TagsContainer>
            <TagLine tagData={tags} lines={tags.length ? 1 : 0} />
          </TagsContainer>
        )}
      </Card>
    )
  }
}
