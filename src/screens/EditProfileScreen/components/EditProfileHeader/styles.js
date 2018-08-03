import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CancelButton = styled.TouchableOpacity``
export const ButtonContainer = styled.View`
  width: 100%;
`
export const CancelText = styled.Text`
  position: absolute;
  left: 0;
  font-size: 18px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
export const Heading = styled.Text`
  align-self: center;
  font-size: 18px;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.bold')};
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${themeGet('colors.divider')};
`
