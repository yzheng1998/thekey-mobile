import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const CardContainer = styled.View`
  width: ${themeGet('width.primary')};
  border-radius: 20;
  background-color: ${themeGet('colors.background')}
  overflow: hidden;
  box-shadow: 20px 20px;
`

export const BioText = styled.Text`
  font-size: 16;
  line-height: 23;
  height: 69;
  font-family: ${themeGet('fonts.light')};
  color: rgb(69, 77, 88);
  margin-bottom: 18;
  margin-left: 16;
  margin-right: 16;
`
