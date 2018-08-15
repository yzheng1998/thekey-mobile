import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const LinkedInButtonText = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
  font-size: 16px;
  position: absolute;
`
export const LinkedInButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-color: rgb(8, 92, 144);
  border-width: 1px;
  background-color: rgb(1, 119, 181);
  border-radius: 8px;
  align-items: center;
  margin-right: 12px;
  flex-direction: row;
  justify-content: center;
`
export const LinkedInLogoContainer = styled.View`
  width: 50px;
  border-color: rgb(8, 92, 144);
  height: 50px;
  border-right-width: 1px;
  background-color: transparent;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  padding-top: 7px;
  padding-bottom: 7px;
`
export const TextContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
`
