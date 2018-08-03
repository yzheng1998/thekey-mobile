import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PickerContainer = styled.TouchableOpacity`
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: row;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  border-width: 1px;
  border-color: ${props =>
    props.selected
      ? themeGet('colors.buttonPrimary')
      : themeGet('colors.textInputBorder')};
  margin-top: 4px;
`

export const TextField = styled.Text`
  font-family: ${themeGet('fonts.regular')};
  font-size: 15px;
  flex: 1;
  margin-left: 12px;
  color: ${props =>
    props.placeholder ? themeGet('colors.pickerPlaceholder') : 'black'};
`
