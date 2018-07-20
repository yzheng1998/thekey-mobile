import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: white;
  padding-top: 40px;
`
export const Title = styled.Text`
  color: black;
  font-family: ${themeGet('fonts.heavy')};
  font-size: 32px;
  margin-left: 20px;
  margin-bottom: 5px;
`
export const NewChatButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${themeGet('colors.buttonPrimary')};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10;
  right: 10;
  box-shadow: 0px 9px 8px rgba(142, 142, 142, 0.9);
  elevation: 2;
`
export const Divider = styled.View`
  width: 100%;
  height: 8px;
  background-color: ${themeGet('colors.divider')};
`
export const ThinDivider = styled.View`
  width: 100%;
  height: 4px;
  margin-top: 5px;
  background-color: ${themeGet('colors.divider')};
`
