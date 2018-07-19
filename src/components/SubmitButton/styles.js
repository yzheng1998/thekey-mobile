import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  height: 75px;
  background-color: ${themeGet('colors.buttonPrimary')};
  width: ${width};
  align-items: center;
`

export const ButtonText = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 14px;
  margin-top: 11px;
`
