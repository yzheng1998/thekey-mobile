import React, { Component } from 'react'
import ProfileInfoRow from '../../../../../components/ProfileInfoRow'

export default class ExperienceRow extends Component {
  render() {
    const { employer, position, startDate, endDate } = this.props
    return (
      <ProfileInfoRow
        title={employer}
        subtitle1={position}
        startYear={startDate}
        endYear={endDate}
      />
    )
  }
}
