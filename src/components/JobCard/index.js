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
      <Card>
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
            <StarContainer>
              <Star name="star" size={21} color="rgb(250,53,121)" />
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
