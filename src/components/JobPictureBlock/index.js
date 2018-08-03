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
  const formattedTime = new Date(time)
  const date = moment(formattedTime)
  const diff = today.diff(date, 'hours')
  const result =
    diff < 24
      ? `Listed ${diff} hours ago`
      : `Listed ${today.diff(date, 'days')} days ago`
  return result
}

const commitmentOptions = [
  { value: 'FULLTIME', label: 'Full Time' },
  { value: 'PARTTIME', label: 'Part Time' },
  { value: 'INTERNSHIP', label: 'value' },
]

class JobPictureBlock extends Component {
  render() {
    const {
      picture,
      title,
      company,
      commitment,
      location,
      time,
      toggleApplyModal,
    } = this.props
    return (
      <HeaderContainer>
        <PictureHeader picture={picture} avatarSize={123} height={360}>
          <DescriptionContainer>
            <Title>{title}</Title>
            <Company>{company}</Company>
            <Description>
              {commitmentOptions.find(el => el.value === commitment).label} —{' '}
              {location}
            </Description>
            <Deadline>{timePosted(time)}</Deadline>
          </DescriptionContainer>
          <Apply onPress={toggleApplyModal}>
            <ApplyButton>APPLY NOW</ApplyButton>
          </Apply>
        </PictureHeader>
      </HeaderContainer>
    )
  }
}

export default JobPictureBlock
