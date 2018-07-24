import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Background = styled.View`
  background-color: ${themeGet('colors.buttonSecondary')};
  flex: 1;
`
export const CardContainer = styled.View`
  padding-top: 15px;
`
export const SwiperContainer = styled.View`
  width: ${width};
  justify-content: center;
  align-items: center;
  align-self: center;
`
