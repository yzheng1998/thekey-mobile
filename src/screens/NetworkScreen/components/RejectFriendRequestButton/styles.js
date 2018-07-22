import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  width: 110px;
  height: 30px;
  border-radius: 7px;
  border-color: ${themeGet('colors.fontDescription.primary')};
  border-width: 1px;
  align-items: center;
`
export const Label = styled.Text`
  font-size: 12px;
  padding-top: 6px;
  color: ${themeGet('colors.fontDescription.secondary')};
  font-family: ${themeGet('fonts.bold')};
`
