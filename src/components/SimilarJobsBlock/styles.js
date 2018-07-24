import styled from 'styled-components'
import { themeGet } from 'styled-system'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  background-color: ${themeGet('colors.background')};
`
export const Header = styled.View`
  flex-direction: row;
  width: 100%;
`
export const Title = styled.Text`
  font-size: 16px;
  line-height: 23px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonQuaternary')};
  padding-top: 16px;
  padding-left: 16px;
  flex: 1;
`
export const JobContainer = styled.View`
  shadow-opacity: 0.25;
  shadow-radius: 10px;
  margin-left: 16px;
  width: ${width * 0.872};
`
export const SeeAll = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonTertiary')};
  margin-top: 16px;
  margin-right: 16px;
`
export const ButtonContainer = styled.TouchableOpacity``
export const List = styled.FlatList`
  padding-top: 16px;
  padding-bottom: 24px;
`
