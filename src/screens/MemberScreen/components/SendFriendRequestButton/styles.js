import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  height: 40;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${props =>
    props.disabled
      ? themeGet('colors.confirmation')
      : themeGet('colors.buttonPrimary')};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Label = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontCard')};
  font-size: 13;
  margin-left: 3;
`
