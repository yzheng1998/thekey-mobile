import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ButtonRow = styled.View`
  width: 100%;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const Tint = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 34px;
  margin-left: 20px;
  margin-top: 7px;
  margin-bottom: 10px;
`
export const SearchButton = styled.TouchableOpacity``
export const BackButton = styled.TouchableOpacity``
