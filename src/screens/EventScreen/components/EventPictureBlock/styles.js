import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PicContainer = styled.View`
  padding-top: 10px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
  color: ${themeGet('colors.fontTag')};
  margin-top: 2px;
`
export const Location = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 18px;
  margin-left: 3px;
  color: ${themeGet('colors.fontTag')};
`
export const Date = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 14px;
  margin-left: 4px;
  color: ${themeGet('colors.fontTag')};
`
export const DescriptionContainer = styled.View`
  align-items: center;
  margin-bottom: 24px;
`
export const HeaderContainer = styled.View``

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 4px;
`
export const TimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 16px;
`
