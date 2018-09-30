import React, { Component } from 'react'
import ProfileInfoRow from '../../../../../components/ProfileInfoRow'
import { degreeTypeOptions } from '../../../../../constants'

const findLabel = (value, options) =>
  options.find(el => el.value === value).label

export default class EducationRow extends Component {
  render() {
    const { schoolName, degreeType, major, startYear, endYear } = this.props
    const degreeTypeLabel = degreeType
      ? findLabel(degreeType, degreeTypeOptions)
      : ''
    return (
      <ProfileInfoRow
        title={schoolName}
        subtitle1={degreeTypeLabel}
        subtitle2={major}
        startYear={startYear}
        endYear={endYear}
      />
    )
  }
}
