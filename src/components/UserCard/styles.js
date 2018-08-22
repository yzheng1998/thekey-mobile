import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  background-color: ${themeGet('colors.background')};
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.border')};
`
export const Name = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
`
export const Subtitle = styled.Text`
  font-size: 12px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
`
export const InfoContainer = styled.View`
  flex: 1;
  margin-left: 12px;
`
export const Picture = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`
export const AddedText = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
`
export const RightContainer = styled.View`
  justify-content: center;
  align-items: center;
  right: 30px;
`
