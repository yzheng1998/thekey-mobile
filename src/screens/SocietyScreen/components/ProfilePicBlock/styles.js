import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  aspect-ratio: 1.048;
  width: 100%;
`

export const NameText = styled.Text`
  font-size: 24;
  line-height: 29;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontPrimary')};
  margin-top: 24px;
  margin-bottom: 3px;
`

export const LocationText = styled.Text`
  font-size: 18;
  line-height: 21;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
`
