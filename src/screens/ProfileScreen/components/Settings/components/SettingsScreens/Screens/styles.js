import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScreenContainer = styled.ScrollView`
  background-color: ${themeGet('colors.background')};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
`

export const Title = styled.Text`
  text-align: center;
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
  color: ${themeGet('colors.fontTitle')};
  align-self: center;
  margin-bottom: 6px;
  margin-top: 6px;
`

export const Paragraph = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 12px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  margin-bottom: 12px;
`
