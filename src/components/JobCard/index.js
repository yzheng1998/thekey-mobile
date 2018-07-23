import React, { Component } from 'react'
import { Image } from 'react-native'
import {
  Host,
  Card,
  LeftContainer,
  Deadline,
  ContentContainer,
  Title,
  Description,
  TagsContainer,
  InfoContainer,
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
        <LeftContainer>
          <Image
            source={picture ? { uri: picture } : questionMark}
            style={{ width: 46, height: 46 }}
          />
          <Deadline>{daysLeft(deadline)}</Deadline>
        </LeftContainer>
        <ContentContainer>
          <InfoContainer>
            <ContentContainer>
              <Title>{title}</Title>
              <Host>{company || 'No Associated Company'}</Host>
            </ContentContainer>
            <JobStarButton
              onPress={this.select}
              isInterested={this.state.isInterested}
              id={id}
              startColor="rgb(250,53,121)"
              endColor="rgb(148, 157, 170)"
            />
          </InfoContainer>
          <Description>
            {commitment} - {location}
          </Description>
          <TagsContainer>
            <TagLine tagData={tagsOff ? [] : tags} lines={1} />
          </TagsContainer>
        </ContentContainer>
      </Card>
    )
  }
}
