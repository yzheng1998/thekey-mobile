import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const EventTitleText = styled.Text`
  font-size: 24;
  line-height: 29;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontTag')};
  margin-top: 24px;
  margin-bottom: 3px;
`

export const LocationText = styled.Text`
  font-size: 18;
  line-height: 21;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontCard')};
`
