import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  background-color: ${themeGet('colors.background')};
`
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonQuaternary')};
  padding-top: 16px;
  padding-left: 16px;
  flex: 1;
`
export const EventContainer = styled.View`
  margin-top: 16px;
  width: ${width * 0.872};
  margin-left: 8px;
  margin-right: 8px;
  padding-bottom: 20px;
  box-shadow: 1px 13px 8px rgb(169,169,169)};
`
export const Header = styled.View`
  flex-direction: row;
  width: 100%;
`
export const SeeAll = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonTertiary')};
  padding-top: 16px;
  padding-right: 16px;
`
export const ButtonContainer = styled.TouchableOpacity``
