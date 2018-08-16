import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const LinkedInButtonText = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
  font-size: 16px;
`
export const LinkedInButton = styled.TouchableOpacity`
  border-color: rgb(8, 92, 144);
  border-width: 1px;
  height: 50px;
  background-color: rgb(1, 119, 181);
  border-radius: 8px;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: center;
`
export const LinkedInLogoContainer = styled.View`
  width: 50px;
  height: 100%;
  position: absolute;
  left: 0;
  align-items: center;
  justify-content: center;
  border-right-width: 1.5px;
  border-radius: 2px;
  border-color: rgb(8, 92, 144);
`
