import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: ${props =>
    props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')};
  margin-top: 24px;
  border-radius: 8px;
  align-items: center;
  padding: 16px;
`

export const ButtonText = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 14px;
`
