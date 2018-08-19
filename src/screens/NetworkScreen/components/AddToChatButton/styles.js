import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  margin-right: 5px;
  position: absolute;
  right: 16px;
`
export const Text = styled.Text`
  font-size: 18px;
  color: ${props =>
    props.disabled
      ? themeGet('colors.headerClicked')
      : themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
