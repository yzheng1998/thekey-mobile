import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PicContainer = styled.View`
  padding-top: 10px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
  margin-bottom: 2px;
  color: ${themeGet('colors.fontTag')};
`
export const Reviews = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 14px;
  color: ${themeGet('colors.fontTag')};
  margin-top: 2px;
`
export const DescriptionContainer = styled.View`
  align-items: center;
  margin-bottom: 64px;
  margin-top: 16px;
`
export const AddReviewButton = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  bottom: 0;
  position: absolute;
  background-color: ${themeGet('colors.buttonPrimary')};
  align-items: center;
  padding: 14px;
`
export const AddReviewText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
  color: white;
`
