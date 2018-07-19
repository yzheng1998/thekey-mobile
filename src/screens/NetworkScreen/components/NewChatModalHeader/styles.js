import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  height: 65px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CancelContainer = styled.View`
  position: absolute;
  left: 10
  flex-direction: row;
`
export const CancelButton = styled.TouchableOpacity``
export const CancelText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
export const Heading = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.bold')};
`
