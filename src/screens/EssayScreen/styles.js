import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  background-color: ${themeGet('colors.background')};
  align-items: center;
`
export const Scroll = styled.ScrollView`
  background-color: ${themeGet('colors.background')};
  flex: 1;
  width: 100%;
`
export const InstructionsContainer = styled.View`
  margin-top: 16px;
`
export const Instructions = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  text-align: center;
`
export const EssayInput = styled.TextInput`
  align-self: center;
  width: 87%;
  height: 264;
  margin-top: 22px;
  padding: 10px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${themeGet('colors.buttonPrimary')};
  overflow: scroll;
`
