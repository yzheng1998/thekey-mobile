import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  height: 62px;
  width: 100%;
  background-color: white;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.border')};
`
export const Name = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
  padding: 20px;
`
export const Picture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 16px;
`
