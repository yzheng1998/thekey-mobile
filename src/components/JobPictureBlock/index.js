import React, { Component } from 'react'
import {
  HeaderContainer,
  DescriptionContainer,
  Title,
  Company,
  Description,
  Deadline,
  Apply,
  ApplyButton,
} from './styles'
import PictureHeader from '../PictureHeader'
import moment from 'moment'

const timePosted = time => {
  const today = moment()
  const date = moment(time)
  const diff = today.diff(date, 'hours')
  const result =
    diff < 24
      ? `Listed ${diff} hours ago`
      : `Listed ${today.diff(date, 'days')} days ago`
  return result
}

class JobPictureBlock extends Component {
  render() {
    const {
      picture,
      title,
      company,
      commitment,
      location,
      time,
      views,
    } = this.props
    return (
      <HeaderContainer>
        <PictureHeader picture={picture} avatarSize={123}>
          <DescriptionContainer>
            <Title>{title}</Title>
            <Company>{company}</Company>
            <Description>
              {commitment} - {location}
            </Description>
            <Deadline>
              {timePosted(time)} - {views} views
            </Deadline>
          </DescriptionContainer>
          <Apply onPress={() => this.props.navigation.navigate('ApplyNow')}>
            <ApplyButton>APPLY NOW</ApplyButton>
          </Apply>
        </PictureHeader>
      </HeaderContainer>
    )
  }
}

export default JobPictureBlock
