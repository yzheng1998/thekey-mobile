import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${themeGet('colors.divider')};
  height: 45px;
  justify-content: center;
  align-items: center;
  margin-top: 10;
  margin-bottom: 20;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  line-height: 23px;
  color: ${themeGet('colors.fontButtonSecondary')};
  font-family: ${themeGet('fonts.bold')};
`
