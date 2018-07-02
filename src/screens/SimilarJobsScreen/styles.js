import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const HeaderBackground = styled.View`
  width: 100%;
  height: 88px;
  flex-direction: row;
  justify-content: center;
  background-color: black;
`
export const Title = styled.Text`
  color: white;
  font-family: ${themeGet('fonts.heavy')};
  font-size: 20px;
  margin-left: 20px;
  top: 45px;
`
export const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 25px;
`
