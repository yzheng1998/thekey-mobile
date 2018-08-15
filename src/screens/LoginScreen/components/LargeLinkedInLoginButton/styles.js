import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const LinkedInButtonText = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
  font-size: 14px;
  margin-left: 3px;
  margin-left: -30px;
`
export const LinkedInButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 12px;
  height: 33px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.linkedInBlue')};
  border-radius: 4;
  border-color: ${themeGet('colors.linkedInBorder')};
  border-width: 0;
`
export const LinkedInLogoContainer = styled.View`
  width: 15%;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`
export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
