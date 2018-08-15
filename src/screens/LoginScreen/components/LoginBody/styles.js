import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Screen = styled.View`
  flex: 1;
`
export const Container = styled.View`
  padding-left: 12px;
  padding-right: 12px;
  border-bottom-width: 0px;
  border-bottom-color: ${themeGet('colors.border')};
`
export const TextInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`
export const ForgotPass = styled.TouchableOpacity`
  align-self: center;
`
export const PinkSubtitleText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
  color: ${themeGet('colors.fontButtonTertiary')};
`
export const PinkSubtitle = styled.TouchableOpacity``
export const SignInButton = styled.TouchableOpacity`
  height: 50px;
  margin-left: 12px;
  margin-right: 12px;
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
export const ColumnContainer = styled.View`
  margin-top: 6px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
`
export const SignUpContainer = styled.View`
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
`
export const Message = styled.Text`
  margin: 100px 0 100px 0;
  text-align: center;
`
export const DividerText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontDescription.primary')};
  font-size: 12px;
`
export const Divider = styled.View`
  width: 46%;
  background-color: ${themeGet('colors.fontDescription.primary')};
  height: 1px;
  margin-left: 3px;
  margin-right: 3px;
`
export const DividerRow = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-left: 12px;
  margin-right: 12px;
  align-items: center;
`
