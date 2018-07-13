import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const PickerContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`
export const PickerView = styled.Picker`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`

export const DoneButton = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.divider')};
`

export const DoneButtonText = styled.Text`
  font-size: 16px;
  color: black;
  font-family: ${themeGet('fonts.medium')};
`
