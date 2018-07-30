import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.ScrollView`
  flex: 1;
`
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
export const InfoText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.textAreaText')};
  font-family: ${themeGet('fonts.light')};
`
export const InfoContainer = styled.View`
  padding: 16px;
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
export const HeaderContainer = styled.View`
  width: 100%;
  aspect-ratio: 1.03878;
`
export const TagsContainer = styled.View`
  border-bottom-width: 4px;
  border-bottom-color: ${themeGet('colors.buttonSecondary')};
`
export const Block = styled.View``
export const Option = styled.Text`
  color: 16px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonQuaternary')};
  padding-top: 16px;
  padding-left: 16px;
`
export const JobsContainer = styled.ScrollView`
  flex-direction: row;
  align-content: flex-start;
  border-bottom-width: 4px;
  border-bottom-color: ${themeGet('colors.buttonSecondary')};
`
export const JobContainer = styled.View`
  box-shadow: 7px 8px 5px ${themeGet('colors.buttonSecondary')};
  margin: 10px;
  padding: 10px;
  padding-bottom: 20px;
`
