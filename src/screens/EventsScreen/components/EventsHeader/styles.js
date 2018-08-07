import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ButtonRow = styled.View`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const HeaderContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 10px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 34px;
  margin-left: 20px;
  margin-bottom: 10px;
`
export const NewEventButton = styled.TouchableOpacity``
export const BackButton = styled.TouchableOpacity``
export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
