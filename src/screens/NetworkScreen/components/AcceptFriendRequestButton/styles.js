import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  width: 110px;
  height: 30px;
  border-radius: 7px;
  background-color: ${themeGet('colors.buttonPrimary')};
  margin-right: 8px;
  align-items: center;
`
export const Label = styled.Text`
  font-size: 12px;
  padding-top: 7px;
  color: white;
  font-family: ${themeGet('fonts.bold')};
`
