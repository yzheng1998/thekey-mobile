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
  StarContainer,
} from './styles'
import Star from 'react-native-vector-icons/FontAwesome'
import TagLine from '../TagLine'
import moment from 'moment'

const daysLeft = time => {
  const today = moment()
  const date = moment(time)
  const diff = date.diff(today, 'hours')
  const result = diff < 24 ? `${diff} h` : `${date.diff(today, 'days')} d`
  return result
}
export default class JobCard extends Component {
  constructor(props) {
    super(props)
    this.state = { isInterested: false }
  }
  render() {
    const {
      picture,
      title,
      company,
      commitment,
      location,
      tags,
      deadline,
    } = this.props.job
    return (
      <Card
        width={this.props.width}
        height={this.props.height}
        activeOpacity={this.props.activeOpacity}
        borderRadius={this.props.borderRadius}
      >
        <LeftContainer>
          <Image source={picture} style={{ width: 46, height: 46 }} />
          <Deadline>{daysLeft(deadline)}</Deadline>
        </LeftContainer>
        <ContentContainer>
          <InfoContainer>
            <ContentContainer>
              <Title>{title}</Title>
              <Host>{company}</Host>
            </ContentContainer>
            <StarContainer
              onPress={() =>
                this.setState({ isInterested: !this.state.isInterested })
              }
            >
              <Star
                name={this.state.isInterested ? 'star' : 'star-o'}
                size={21}
                color={
                  this.state.isInterested
                    ? 'rgb(250,53,121)'
                    : '(rgb(148,157,170)'
                }
              />
            </StarContainer>
          </InfoContainer>
          <Description>
            {commitment} - {location}
          </Description>
          <TagsContainer>
            <TagLine tagData={tags} lines={1} />
          </TagsContainer>
        </ContentContainer>
      </Card>
    )
  }
}
