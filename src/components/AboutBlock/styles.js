import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.ScrollView`
  flex: 1;
`
export const InfoText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.textAreaText')};
  font-family: ${themeGet('fonts.light')};
`
export const InfoContainer = styled.TouchableOpacity`
  padding-left: 16px;
  padding-top: 16px;
  background-color: white;
`
export const See = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: ${themeGet('colors.buttonSecondary')};
  align-items: center;
  padding: 14px;
`
export const SeeButton = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
  color: ${themeGet('colors.fontButtonSecondary')};
`
