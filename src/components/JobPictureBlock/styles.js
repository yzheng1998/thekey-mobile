import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PicContainer = styled.View`
  padding-top: 10px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
  color: ${themeGet('colors.fontTag')};
  padding-top: 15px;
`
export const Company = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 18px;
  color: ${themeGet('colors.fontTag')};
`
export const Description = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 14px;
  color: ${themeGet('colors.fontTag')};
  padding-top: 5px;
`
export const Deadline = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 12px;
  color: ${themeGet('colors.fontTag')};
  padding-top: 5px;
`
export const Apply = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: ${themeGet('colors.buttonPrimary')};
  align-items: center;
  padding: 14px;
`
export const ApplyButton = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
  color: white;
`

export const DescriptionContainer = styled.View`
  align-items: center;
`
export const HeaderContainer = styled.View`
  width: 100%;
  aspect-ratio: 1.03878;
`
export const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  background-color: blue;
  top: 40px;
  left: 20px;
`
