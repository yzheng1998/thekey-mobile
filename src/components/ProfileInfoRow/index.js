import React, { Component } from 'react'
import {
  EducationRowContainer,
  TextContainer,
  Title,
  Subtitle,
  Years,
} from './styles'

export default class EducationRow extends Component {
  render() {
    const { title, subtitle1, subtitle2, startYear, endYear } = this.props
    const subtitleArray = [subtitle1, subtitle2].filter(Boolean)
    return (
      <EducationRowContainer>
        <TextContainer>
          <Title>{title}</Title>
          {subtitleArray.length > 0 && (
            <Subtitle>{subtitleArray.join(', ')}</Subtitle>
          )}
          <Years>
            {startYear} - {endYear}
          </Years>
        </TextContainer>
      </EducationRowContainer>
    )
  }
}
