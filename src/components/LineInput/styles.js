import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const LineInputContainer = styled.View`
  flex-direction: row;
  height: 50px;
  width: ${props => props.width || '100%'};
  border-radius: 8px;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  border-width: 1px;
  border-color: ${props =>
    props.selected
      ? themeGet('colors.buttonPrimary')
      : themeGet('colors.textInputBorder')};
  margin-top: 11px;
  margin-bottom: 11px;
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
  margin-right: 8px;
`
