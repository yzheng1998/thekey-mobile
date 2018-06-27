import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 40px;
  padding-bottom: 10px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.bold')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
`
