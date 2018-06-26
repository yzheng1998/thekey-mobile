import React, { Component } from 'react'
import {
  EducationRowContainer,
  TextContainer,
  University,
  Degree,
  Years,
  SchoolBadge,
} from './styles'

export default class EducationRow extends Component {
  render() {
    const { university, degree, major, yearStart, yearEnd, badge } = this.props
    return (
      <EducationRowContainer>
        <TextContainer>
          <University>{university}</University>
          {degree && (
            <Degree>
              {degree}, {major}
            </Degree>
          )}
          <Years>
            {yearStart} - {yearEnd}
          </Years>
        </TextContainer>
        <SchoolBadge source={badge} />
      </EducationRowContainer>
    )
  }
}
