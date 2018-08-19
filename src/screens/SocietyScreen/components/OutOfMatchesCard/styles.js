import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const CardContainer = styled.View`
  align-self: center;
  flex: 1;
  z-index: -1;
  justify-content: center;
`

export const BoldText = styled.Text`
  text-align: center;
  width: 250px;
  font-size: 16;
  line-height: 23;
  height: 69px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  margin-left: 16;
  margin-right: 16;
  margin-bottom: 7px;
`
