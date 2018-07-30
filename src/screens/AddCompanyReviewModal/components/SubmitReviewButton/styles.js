import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: ${props =>
    props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')};
  align-items: center;
  padding: 10px;
`
export const SubmitButtonText = styled.Text`
  font-size: 14px;
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.bold')};
`
