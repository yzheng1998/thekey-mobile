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
    return (
      <EducationRowContainer>
        <TextContainer>
          <Title>{title}</Title>
          {subtitle1 && (
            <Subtitle>
              {subtitle1}, {subtitle2}
            </Subtitle>
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
