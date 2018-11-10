import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  flex-grow: 1;
  margin-top: 4px;
  margin-left: 12px;
  margin-right: 12px;
`

export const PickerContainer = styled.TouchableOpacity`
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
`

export const TextField = styled.Text`
  font-family: ${themeGet('fonts.regular')};
  font-size: 15px;
  flex: 1;
  margin-left: 12px;
  color: ${props =>
    props.placeholder ? themeGet('colors.pickerPlaceholder') : 'black'};
`

export const Title = styled.Text`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${themeGet('colors.activeTag')};
  font-family: ${themeGet('fonts.medium')};
`
