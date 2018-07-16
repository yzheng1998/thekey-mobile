import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`

export const Instructions = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  text-align: center;
`

export const InstructionsContainer = styled.View`
  margin-top: 16px;
`
