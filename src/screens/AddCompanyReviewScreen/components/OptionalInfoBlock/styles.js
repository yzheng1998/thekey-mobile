import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const OptionalHeading = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  margin-bottom: 15px;
  color: ${themeGet('colors.fontSubtitle.primary')};
`
export const InputField = styled.TextInput`
  font-size: 16px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
  max-height: 80px;
  justify-content: flex-end;
  overflow: scroll;
  width: 75%;
  text-align: right;
`
