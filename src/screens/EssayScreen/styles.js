import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding-left: 12;
  padding-right: 12;
`
export const Container = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`
export const InstructionsContainer = styled.View``

export const Instructions = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  text-align: center;
`
export const EssayInput = styled.TextInput`
  height: 210px;
  margin-left: 12px;
  padding: 10px;
  margin-right: 12px;
  margin-top: 22px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${themeGet('colors.buttonPrimary')};
  overflow: scroll;
  text-align-vertical: top;
`
