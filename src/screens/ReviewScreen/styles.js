import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.ScrollView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const Divider = styled.View`
  width: 100%;
  height: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${themeGet('colors.divider')};
`
export const SafeView = styled.SafeAreaView`
  flex: 1;
`
export const Header = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
`
export const BackButtonContainer = styled.TouchableOpacity`
  margin-left: 20px;
`
