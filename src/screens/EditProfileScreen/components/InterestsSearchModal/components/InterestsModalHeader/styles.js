import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  height: 60px;
`
export const CancelButton = styled.TouchableOpacity``
export const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  bottom: 10px;
  position: absolute;
  padding-left: 12px;
  padding-right: 16px;
  align-items: center;
  justify-content: space-between;
`
export const CancelText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
export const Heading = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.bold')};
  align-self: center;
  position: absolute;
  bottom: 10px;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const DoneText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
