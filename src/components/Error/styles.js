import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View``

export const ErrorMessage = styled.Text`
  font-size: 14px;
  margin-left: 12px;
  line-height: 16px;
  margin-top: 4px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.buttonPrimary')};
`
