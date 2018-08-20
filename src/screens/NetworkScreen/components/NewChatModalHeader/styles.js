import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  height: 65px;
  padding-top: 15px;
  flex-direction: row;
  align-items: center;
`
export const CancelButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
`
export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`
export const CancelText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
export const Heading = styled.Text`
  font-size: 18px;
  align-self: center;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.bold')};
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
