import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Content = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.light')};
  line-height: 23px;
  color: ${themeGet('colors.fontDescription.tertiary')};
  margin-top: 3px;
  margin-bottom: 3px;
`
