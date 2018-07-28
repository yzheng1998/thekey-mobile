import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const CardContainer = styled.View`
  position: absolute;
  top: 30px;
  width: 87%;
  align-self: center;
  z-index: -1;
  height: 520px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 20px;
  background-color: ${themeGet('colors.background')};
  shadow-opacity: 0.3px;
  shadow-radius: 10px;
  justify-content: center;
`

export const BoldText = styled.Text`
  text-align: center;
  font-size: 16;
  line-height: 23;
  height: 69px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  margin-left: 16;
  margin-right: 16;
  margin-bottom: 7px;
`
