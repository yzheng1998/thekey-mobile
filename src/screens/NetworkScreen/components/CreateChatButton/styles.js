import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity``
export const Text = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
