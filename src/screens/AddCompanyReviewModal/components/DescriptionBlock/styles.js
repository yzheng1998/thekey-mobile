import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const HelpText = styled.Text`
  font-size: 16px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
export const ReviewInputField = styled.TextInput`
  text-align-vertical: top;
  font-size: 18px;
  color: ${themeGet('colors.fontDescription.secondary')};
  font-family: ${themeGet('fonts.light')};
  max-height: 80px;
  overflow: scroll;
`
