import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Tint = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  flex: 1;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
  flex: 1;
`
export const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const HeaderContainer = styled.View`
  width: 100%;
  height: 65px;
  padding: 10px;
  padding-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CancelButton = styled.TouchableOpacity``
export const CancelText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
export const Heading = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.bold')};
`
export const QRCodeContainer = styled.TouchableOpacity``
export const SurroundingContainer = styled.TouchableOpacity`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`
