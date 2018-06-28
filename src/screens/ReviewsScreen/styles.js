import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const HeaderBackground = styled.View`
  width: 100%;
  height: 181px;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 90px;
`
export const Title = styled.Text`
  color: white;
  font-family: ${themeGet('fonts.heavy')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
`
export const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  left: 20px;
`
export const SearchBarContainer = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${themeGet('colors.buttonSecondary')};
`
