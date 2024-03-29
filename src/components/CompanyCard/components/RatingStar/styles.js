import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const StarContainer = styled.View`
  padding-bottom: 5px;
  padding-right: 4px;
`
export const RatingContainer = styled.View`
  flex-direction: row;
`
export const RateText = styled.Text`
  color: ${themeGet('colors.buttonPrimary')};
  font-size: 16px;
  line-height: 19px;
  font-family: ${themeGet('fonts.medium')};
  margin-top: -1px;
`
