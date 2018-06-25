import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon from 'react-native-vector-icons/Ionicons'

export const SearchBarContainer = styled.View`
  height: 36;
  padding-left: 16;
  padding-right: 16;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`

export const SearchContainer = styled.View`
  height: 36;
  flex-direction: row;
  flex: 1;
  border-radius: 10;
  align-items: center;
  background-color: rgba(142, 142, 147, 0.12);
  overflow: hidden;
  padding-left: 8;
  padding-right: 8;
`

export const SearchText = styled.TextInput`
  flex: 1;
  height: 100%;
  background-color: transparent;
  padding-left: 7;
`

export const SearchIcon = styled(Icon)`
  background-color: transparent;
  color: ${themeGet('colors.fontSubtitle')};
`

export const ClearIconButton = styled.TouchableOpacity``

export const ClearIcon = styled(Icon)`
  background-color: transparent;
  color: ${themeGet('colors.fontSubtitle')};
`

export const CancelButton = styled.TouchableOpacity`
  margin-left: 16;
`

export const CancelText = styled.Text`
  font-size: 17;
  line-height: 20;
  font-family: ${themeGet('fonts.regular')};
  color: ${themeGet('colors.buttonPrimary')};
`
