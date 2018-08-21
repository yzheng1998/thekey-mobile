import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const StarContainer = styled.View`
  padding-right: 4px;
`
export const RatingContainer = styled.View`
  flex-direction: row;
  margin-top: 4px;
  margin-bottom: 8px;
`
export const RateText = styled.Text`
  color: ${props => props.color || themeGet('colors.buttonPrimary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  margin-top: -1px;
`
