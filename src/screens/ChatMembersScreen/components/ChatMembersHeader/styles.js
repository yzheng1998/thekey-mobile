import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const TitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const BackButton = styled.TouchableOpacity``
export const PlusButton = styled.TouchableOpacity``
export const ButtonRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 60px;
`
export const Title = styled.Text`
  font-size: 17px;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.heavy')};
  position: absolute;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
