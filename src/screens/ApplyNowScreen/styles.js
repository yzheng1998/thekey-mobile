import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BigContainer = styled.View`
  flex: 1;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 34px;
  padding-bottom: 8px;
`
export const Container = styled.ScrollView`
  padding: 24px;
  padding-bottom: -24px;
  background-color: white;
  flex: 1;
`
export const Prompt = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px;
  color: ${themeGet('colors.fontSubtitle')};
  padding-bottom: 12px;
`
export const ButtonsContainer = styled.View`
  margin-left: -10px;
  height: 29;
  width: 100%;
`
export const LetterInput = styled.TextInput`
  margin-top: 27px;
  padding: 14px;
  overflow: scroll;
  height: 344px;
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
export const ApplyButton = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: ${themeGet('colors.fontButtonTertiary')};
  align-items: center;
  padding: 10px;
`
export const Placeholder = styled.Text`
  padding-top: 4px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontTag')};
  font-size: 14px;
`
