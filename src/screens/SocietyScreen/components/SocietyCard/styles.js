import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Platform } from 'react-native'

export const CardContainer = styled.TouchableOpacity`
  height: 540px;
  border-radius: 20;
  border-width: ${Platform.OS === 'ios' ? 0 : 0.5};
  border-color: ${Platform.OS === 'ios'
    ? themeGet('colors.background')
    : themeGet('colors.fontDescription.secondary')};
  background-color: ${themeGet('colors.background')};
  shadow-opacity: 0.3;
  shadow-radius: 10px;
`

export const BioText = styled.Text`
  font-size: 16;
  line-height: 23;
  height: 69px;
  font-family: ${themeGet('fonts.light')};
  color: rgb(69, 77, 88);
  margin-left: 16;
  margin-right: 16;
  margin-bottom: 7px;
`
