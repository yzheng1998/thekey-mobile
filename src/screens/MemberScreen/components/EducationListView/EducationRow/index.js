import React, { Component } from 'react'
import ProfileInfoRow from '../../../../../components/ProfileInfoRow'

export default class EducationRow extends Component {
  render() {
    const { schoolName, degreeType, major, startYear, endYear } = this.props
    return (
      <ProfileInfoRow
        title={schoolName}
        subtitle1={degreeType}
        subtitle2={major}
        startYear={startYear}
        endYear={endYear}
      />
    )
  }
}
