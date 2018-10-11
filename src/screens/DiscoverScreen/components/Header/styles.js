import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
`
export const IconButton = styled.TouchableOpacity`
  border-radius: 20px;
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${themeGet('colors.cardLoading')};
`
export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
export const TextBox = styled.View`
  justify-content: space-between;
  flex: 1;
  margin-left: 12px;
  margin-right: 12px;
`
export const Title = styled.Text`
  color: black;
  font-family: ${themeGet('fonts.heavy')};
  font-size: 34px;
  font-weight: bold;
`
export const Name = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
`
export const InviteButton = styled.TouchableOpacity`
  background-color: ${themeGet('colors.background')};
  border-radius: 8px;
  border-color: ${themeGet('colors.buttonPrimary')};
  border-width: 1.5;
  padding-left: 5px;
  padding-right: 5px;
`

export const InviteText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 14px;
  line-height: 25px;
  color: ${themeGet('colors.buttonPrimary')};
`
