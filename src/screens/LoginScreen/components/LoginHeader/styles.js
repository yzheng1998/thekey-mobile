import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  height: 303px;
  width: 100%;
  background-color: white;
  border-width: 1px;
  border-color: ${themeGet('colors.border')};
  align-items: center;
`
export const Content = styled.View`
  padding-top: 79px;
  align-items: center;
`
export const SubTitle = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 14px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: black;
  font-size: 40px;
`