import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const TitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.background')};
  height: 60px;
`
export const BackButton = styled.TouchableOpacity``
export const BackButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  justify-content: flex-start;
  padding-left: 16px;
`
export const Title = styled.Text`
  font-size: 17px;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.heavy')};
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
