import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
  background-color: white;
`
export const SwiperContainer = styled.View`
  flex: 1;
`
export const Container = styled.View`
  flex: 0.5;
  background-color: ${themeGet('colors.splashBackground')};
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
`
export const Content = styled.View`
  align-items: center;
  flex: 1;
`
export const SubTitle = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
`
export const SubTitleSecondary = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  text-align: center;
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
  margin-left: 8px;
  margin-right: 8px;
`
export const Divider = styled.View`
  background-color: ${themeGet('colors.fontDescription.primary')};
  height: 1px;
  flex: 1;
`
export const DividerRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
`
export const SignInButton = styled.TouchableOpacity`
  height: 50px;
  background-color: ${themeGet('colors.buttonPrimary')};
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const RegisterButton = styled.TouchableOpacity`
  border-color: ${themeGet('colors.buttonPrimary')};
  border-width: 2px;
  background-color: white;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
