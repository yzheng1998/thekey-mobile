import React, { Component } from 'react'
import ProfileInfoRow from '../../../../components/ProfileInfoRow'

export default class EducationRow extends Component {
  render() {
    const { university, degree, major, yearStart, yearEnd, badge } = this.props
    return (
      <ProfileInfoRow
        title={university}
        subtitle1={degree}
        subtitle2={major}
        yearStart={yearStart}
        yearEnd={yearEnd}
        badge={badge}
      />
    )
  }
}
