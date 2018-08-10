import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const HeaderContainer = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 10px;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const BackButton = styled.TouchableOpacity`
  margin-left: 20px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
`