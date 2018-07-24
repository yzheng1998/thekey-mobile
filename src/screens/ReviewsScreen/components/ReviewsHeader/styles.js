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
export const Tint = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const BackButtonContainer = styled.TouchableOpacity`
  margin-left: 20px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
`
