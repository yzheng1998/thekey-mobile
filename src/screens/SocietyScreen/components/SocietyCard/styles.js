import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const CardContainer = styled.View`
  width: ${themeGet('width.primary')};
  height: 540px;
  border-radius: 20;
  background-color: ${themeGet('colors.background')}
  overflow: hidden;
  box-shadow: 20px 20px;
`

export const BioText = styled.Text`
  font-size: 16;
  line-height: 23;
  height: 69px;
  font-family: ${themeGet('fonts.light')};
  color: rgb(69, 77, 88);
  margin-left: 16;
  margin-right: 16;
`
