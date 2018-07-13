import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  width: 100%;
  background-color: white;
  padding-top: 20px;
  padding-left: 17px;
  padding-bottom: 15px;
  border-bottom-width: 3px;
  border-bottom-color: ${themeGet('colors.divider')};
`
export const Title = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
  padding-bottom: 7px;
`
export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.medium')};
  padding-bottom: 8px;
  color: ${themeGet('colors.fontDescription.primary')};
`
export const RatingContainer = styled.Text`
  padding-bottom: 7px;
`
export const IconContainer = styled.View`
  padding-right: 5px;
  margin-bottom: -3px;
`
export const SecondaryTitle = styled.Text`
  font-size: 15px;
  font-family: ${themeGet('fonts.bold')};
  padding-top: 7px;
  padding-bottom: 8px;
`
export const Comment = styled.Text`
  padding-bottom: 8px;
  font-size: 18px;
  font-family: ${themeGet('fonts.light')};
  color: ${themeGet('colors.fontDescription.tertiary')};
`
export const Container = styled.View`
  width: 343px;
`
