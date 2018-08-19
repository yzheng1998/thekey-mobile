import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  margin-right: 6px;
`
export const Text = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
