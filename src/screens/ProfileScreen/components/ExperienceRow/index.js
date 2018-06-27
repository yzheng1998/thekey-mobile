import React, { Component } from 'react'
import ProfileInfoRow from '../../../../components/ProfileInfoRow'

export default class ExperienceRow extends Component {
  render() {
    const { company, position, yearStart, yearEnd, badge } = this.props
    return (
      <ProfileInfoRow
        title={company}
        subtitle1={position}
        yearStart={yearStart}
        yearEnd={yearEnd}
        badge={badge}
      />
    )
  }
}
