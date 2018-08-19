import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CancelButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`
export const ButtonContainer = styled.View`
  width: 100%;
  margin-bottom: 6px;
`
export const CancelText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontSubtitle.primary')};
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
