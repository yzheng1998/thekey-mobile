import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ContactContent = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.light')};
  line-height: 23px;
  color: ${themeGet('colors.fontDescription.tertiary')};
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 5px;
`

export const ContactContainer = styled.View`
  margin-bottom: 12px;
`

export const Contact = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`
