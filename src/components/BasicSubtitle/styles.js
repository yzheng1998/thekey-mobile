import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  align-items: center;
  width: 100%;
`

export const Subtitle = styled.Text`
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  font-family: ${themeGet('fonts.regular')};
  line-height: 20px;
  color: ${themeGet('colors.fontSubtitle.primary')};
`
