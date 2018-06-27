import React, { Component } from 'react'
import ProfileInfoRow from '../../../../../components/ProfileInfoRow'

export default class ExperienceRow extends Component {
  render() {
    const { companyName, position, startYear, endYear } = this.props
    return (
      <ProfileInfoRow
        title={companyName}
        subtitle1={position}
        startYear={startYear}
        endYear={endYear}
      />
    )
  }
}
