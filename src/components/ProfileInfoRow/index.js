import React, { Component } from 'react'
import {
  EducationRowContainer,
  TextContainer,
  Title,
  Subtitle,
  Years,
  Badge,
} from './styles'

export default class EducationRow extends Component {
  render() {
    const {
      title,
      subtitle1,
      subtitle2,
      yearStart,
      yearEnd,
      badge,
    } = this.props
    const subtitleArray = [subtitle1, subtitle2].filter(Boolean)
    return (
      <EducationRowContainer>
        <TextContainer>
          <Title>{title}</Title>
          {subtitleArray.length > 0 && (
            <Subtitle>{subtitleArray.join(', ')}</Subtitle>
          )}
          <Years>
            {yearStart} - {yearEnd}
          </Years>
        </TextContainer>
        <Badge source={badge} />
      </EducationRowContainer>
    )
  }
}
