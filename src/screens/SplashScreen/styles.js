import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  height: 303px;
  width: 100%;
  background-color: white;
  border-width: 1px;
  border-color: ${themeGet('colors.border')};
  align-items: center;
`
export const Content = styled.View`
  padding-top: 79px;
  align-items: center;
`
export const SubTitle = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 14px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: black;
  font-size: 40px;
`
export const SignInText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: white;
  font-size: 14px;
`
export const RegisterText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: ${themeGet('colors.buttonPrimary')};
  font-size: 14px;
`
export const SignInButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: ${themeGet('colors.buttonPrimary')};
  margin-top: 24px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
export const RemoveButton = styled.TouchableOpacity`
  width: 100%;
  border-color: ${themeGet('colors.buttonPrimary')};
  border-width: 5px;
  background-color: white
  margin-top: 24px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
