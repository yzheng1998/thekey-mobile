import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 40px;
  padding-bottom: 10px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.bold')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
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
