import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: white;
`
export const Container = styled.View`
  width: 100%;
  height: 325px;
  background-color: white;
  border-color: ${themeGet('colors.border')};
  align-items: center;
  padding: 24px;
`
export const Content = styled.View`
  padding-top: 79px;
  align-items: center;
`
export const SubTitle = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 18px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: black;
  font-size: 48px;
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
export const DividerText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontDescription.primary')};
  font-size: 12px;
`
export const Divider = styled.View`
  width: 47%;
  background-color: ${themeGet('colors.fontDescription.primary')};
  height: 1px;
  margin-left: 3px;
  margin-right: 3px;
`
export const DividerRow = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  align-items: center;
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
export const RegisterButton = styled.TouchableOpacity`
  width: 100%;
  border-color: ${themeGet('colors.buttonPrimary')};
  border-width: 2px;
  background-color: white
  margin-top: 15px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
