import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  background-color: ${themeGet('colors.background')};
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
`
export const Scroll = styled.ScrollView`
  background-color: ${themeGet('colors.background')};
  flex: 1;
  width: 100%;
`
export const InstructionsContainer = styled.View``

export const Instructions = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  text-align: center;
`
export const EssayInput = styled.TextInput`
  height: 264;
  margin-left: 12px;
  padding: 10px;
  margin-right: 12px;
  margin-top: 22px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${themeGet('colors.buttonPrimary')};
  overflow: scroll;
`
