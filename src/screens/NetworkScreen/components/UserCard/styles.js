import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  height: 62px;
  width: 100%;
  background-color: white;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.border')};
`
export const Name = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
  margin-bottom: 2px;
`
export const Location = styled.Text`
  font-size: 12px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
`
export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 10px;
`
export const Picture = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin: 6px;
`
