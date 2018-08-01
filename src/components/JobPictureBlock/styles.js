import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
  color: ${themeGet('colors.fontTag')};
  margin-top: 10px;
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
  margin-top: 3px;
`
export const Deadline = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 12px;
  color: ${themeGet('colors.fontTag')};
  margin-top: 3px;
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
