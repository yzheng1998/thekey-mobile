import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.TouchableOpacity`
  width: 100%;
  overflow: hidden;
  background-color: white;
  flex-direction: row;
  padding-left: 16px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.border')};
`
export const RightContainer = styled.View`
  margin-left: 15px;
  padding-top: 18px;
  flex: 1;
  padding-bottom: 20px; */
`
export const Title = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
  padding-bottom: 5px;
`
export const Description = styled.Text`
  font-size: 13px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontDescription.primary')};
`
export const CompanyPicture = styled.Image`
  width: 46;
  height: 46;
  border-radius: 23;
`
