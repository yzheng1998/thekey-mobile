import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const EducationRowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5.5;
  margin-bottom: 5.5;
`

export const TextContainer = styled.View`
  padding-left: 16;
`

export const Title = styled.Text`
  font-size: 14;
  font-family: ${themeGet('fonts.medium')};
  line-height: 19;
  color: ${themeGet('colors.fontDescription.tertiary')};
  margin-bottom: 1;
`

export const Subtitle = styled.Text`
  font-size: 18;
  font-family: ${themeGet('fonts.light')};
  line-height: 23;
  color: ${themeGet('colors.fontDescription.tertiary')};
  margin-bottom: 1;
`

export const Years = styled.Text`
  font-size: 12;
  font-family: ${themeGet('fonts.medium')};
  line-height: 19;
  color: ${themeGet('colors.fontSubtitle.primary')};
`

export const Badge = styled.Image`
  width: 46;
  height: 46;
  margin-right: 16;
  margin-left: 16;
`
