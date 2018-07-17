import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const LineInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  height: 50px;
  border-radius: 8px;
  margin-left: 12px;
  margin-right: 12px;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-width: 1px;
  border-color: ${props =>
    props.selected
      ? themeGet('colors.buttonPrimary')
      : themeGet('colors.textInputBorder')};
`

export const InputContainer = styled.View`
  font-family: ${themeGet('fonts.regular')};
  flex-direction: row;
  align-items: center;
`

export const Input = styled.TextInput`
  font-size: 15px;
  flex: 1;
  margin-left: 12px;
`

export const ClearIconButton = styled.TouchableOpacity`
  margin-left: 6px;
`
