import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

export const BigContainer = styled(Modal)`
  flex: 1;
  margin: 0px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 34px;
  padding-bottom: 8px;
`
export const Container = styled.ScrollView`
  padding: 24px;
  padding-bottom: -24px;
  background-color: ${themeGet('colors.background')};
  flex: 1;
`
export const Prompt = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  padding-bottom: 12px;
`
export const LetterInput = styled.TextInput`
  margin-top: 10px;
  padding: 14px;
  overflow: scroll;
  height: 380px;
  background-color: ${themeGet('colors.textArea')};
  font-family: ${themeGet('fonts.light')};
  font-size: 17px;
  border-radius: 9px;
  border-color: ${themeGet('colors.textAreaBorder')};
  border-width: 1px;
`
export const BackButtonContainer = styled.TouchableOpacity`
  margin-top: 25px;
  width: 4%;
`
export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: ${themeGet('colors.buttonPrimary')};
  align-items: center;
  padding: 10px;
`
export const Placeholder = styled.Text`
  padding-top: 4px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontTag')};
  font-size: 14px;
`
