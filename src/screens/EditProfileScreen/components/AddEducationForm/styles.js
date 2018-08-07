import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const AddButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: white;
  font-size: 14px;
`
export const RemoveButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: ${themeGet('colors.buttonPrimary')};
  font-size: 14px;
`
export const AddButton = styled.TouchableOpacity`
  height: 50px;
  background-color: ${props =>
    props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')};
  margin-top: 12px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
export const RemoveButton = styled.TouchableOpacity`
  background-color: white;
  margin-top: 24px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
export const ButtonContainer = styled.View`
  width: 100%;
`

export const DateInputRow = styled.View`
  flex-direction: row;
  width: 100%;
`

export const OptionsInputContainer = styled.TouchableOpacity`
  margin-left: 12px;
  margin-right: 12px;
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
export const OptionsPlaceholder = styled.Text`
  font-size: 15px;
  flex: 1;
  color: ${themeGet('colors.pickerPlaceholder')};
  margin-left: 12px;
`
export const OptionsText = styled.Text`
  margin-left: 12px;
`
