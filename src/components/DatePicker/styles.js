import styled from 'styled-components'
import { themeGet } from 'styled-system'

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
