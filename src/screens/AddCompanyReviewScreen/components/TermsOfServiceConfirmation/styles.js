import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const DescriptionText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.medium')};
`
export const LinkText = styled.Text`
  font-size: 14px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
export const DescriptionContainer = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 10px;
`
