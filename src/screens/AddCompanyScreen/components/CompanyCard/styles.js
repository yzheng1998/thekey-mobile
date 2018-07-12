import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  background-color: white;
  height: 60px;
  width: 100%;
  flex-direction: row;
`
export const Picture = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  margin-top: 12px;
  margin-left: 16px;
  margin-right: 16px;
`

export const Container = styled.View`
  flex: 1;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.divider')};
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: black;
  font-size: 18px;
  margin-top: 10px;
`
export const SubTitle = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  padding-top: 2px;
`
