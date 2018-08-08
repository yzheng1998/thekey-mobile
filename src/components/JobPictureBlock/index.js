import React, { Component } from 'react'
import {
  HeaderContainer,
  DescriptionContainer,
  Title,
  Company,
  Description,
  Deadline,
  Apply,
  ApplyButtonText,
  AppliedButtonText,
  RowContainer,
} from './styles'
import PictureHeader from '../PictureHeader'
import CheckIcon from 'react-native-vector-icons/FontAwesome'
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
      hasApplied,
    } = this.props
    return (
      <HeaderContainer>
        <PictureHeader picture={picture} avatarSize={123} height={365}>
          <Apply
            disabled={hasApplied}
            onPress={toggleApplyModal}
            hasApplied={hasApplied}
          >
            {hasApplied ? (
              <RowContainer>
                <CheckIcon name="check" color="white" size={13} />
                <AppliedButtonText>APPLIED FOR</AppliedButtonText>
              </RowContainer>
            ) : (
              <ApplyButtonText>APPLY NOW</ApplyButtonText>
            )}
          </Apply>
          <DescriptionContainer>
            <Title>{title}</Title>
            <Company>{company}</Company>
            <Description>
              {commitmentOptions.find(el => el.value === commitment).label} —{' '}
              {location}
            </Description>
            <Deadline>{timePosted(time)}</Deadline>
          </DescriptionContainer>
        </PictureHeader>
      </HeaderContainer>
    )
  }
}

export default JobPictureBlock
