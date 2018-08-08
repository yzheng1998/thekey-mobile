import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const LineInputContainer = styled.View`
  flex-direction: row;
  height: 50px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 8px;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  border-width: 1px;
  border-color: ${props =>
    props.selected && !props.staticBorder
      ? themeGet('colors.buttonPrimary')
      : themeGet('colors.textInputBorder')};
  margin-top: 4px;
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
export const RowContainer = styled.View`
  flex: 1;
  width: 100%;
`
