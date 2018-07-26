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
`
export const QRCodeContainer = styled.TouchableOpacity``
export const SurroundingContainer = styled.TouchableOpacity`
  width: 100%;
  flex: 1;
  padding-bottom: 200px;
  padding-top: 50px;
  justify-content: space-around;
  align-items: center;
`
export const ScannerText = styled.Text`
  font-size: 17px;
  font-family: ${themeGet('fonts.light')};
  color: ${themeGet('colors.fontPrimary')};
  margin-top: 4;
`
export const ScannerButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`
export const Button = styled.TouchableOpacity``
export const ScanImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
