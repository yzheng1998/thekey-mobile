import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Screen = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.divider')};
`
export const Background = styled.ScrollView`
  background-color: ${themeGet('colors.divider')};
  flex: 1;
`
export const CardContainer = styled.View`
  height: 560px;
`
export const SwiperContainer = styled.View`
  width: ${width};
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const CardButton = styled.TouchableOpacity``
