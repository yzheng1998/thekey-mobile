import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const LinkedInButtonText = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
  font-size: 13px;
  position: absolute;
`
export const LinkedInButton = styled.TouchableOpacity`
  width: 190px;
  height: 33px;
  border-color: rgb(8, 92, 144);
  border-width: 1px;
  background-color: rgb(1, 119, 181);
  border-radius: 4px;
  align-items: center;
  margin-top: 10px;
  margin-left: 12px;
  margin-right: 12px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;
`
export const LinkedInLogoContainer = styled.View`
  width: 15%;
  background-color: transparent;
  border-radius: 3px;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 7px;
`
export const RowContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
`
