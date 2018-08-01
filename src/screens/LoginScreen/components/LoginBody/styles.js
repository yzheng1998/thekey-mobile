import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const SafeView = styled.SafeAreaView`
  flex: 1;
`
export const Container = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.border')};
  background-color: ${themeGet('colors.buttonSecondary')};
`
export const TextInput = styled.TextInput`
  margin-top: 30px;
  margin-bottom: 10px;
  height: 50px;
  width: 85%;
  border-width: 1px;
  background-color: white;
  border-color: ${themeGet('colors.border')};
  border-radius: 10px;
  padding-left: 44px;
`
export const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const IconContainer = styled.View`
  position: absolute;
  padding-top: 20px;
  margin-left: 13px;
  z-index: 10px;
`
export const ForgotPass = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 25px;
`
export const PinkSubtitleText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
  color: ${themeGet('colors.fontButtonTertiary')};
`
export const PinkSubtitle = styled.TouchableOpacity``
export const SignInButton = styled.TouchableOpacity`
  height: 50px;
  width: 85%;
  background-color: ${props =>
    props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')};
  margin-top: 24px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
`
export const SignInText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: white;
  font-size: 14px;
`
export const Subtitle = styled.Text`
  font-family: ${themeGet('fonts.regular')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 14px;
  padding-right: 5px;
`
export const SmallContainer = styled.View`
  padding-top: 30px;
  flex-direction: row;
`
export const ColumnContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
export const LinkedInIconContainer = styled.View`
  margin-top: -6px;
`
export const SignUpContainer = styled.View`
  flex-direction: row;
  background-color: white;
  height: 50px;
  align-items: center;
  padding-left: 90px;
  width: 100%;
`
export const Message = styled.Text`
  margin: 100px 0 100px 0;
  text-align: center;
`
