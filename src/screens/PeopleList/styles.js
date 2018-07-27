import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
`
export const Tint = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 10px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
`
export const BackButton = styled.TouchableOpacity`
  margin-left: 20px;
`
export const Divider = styled.View`
  width: 100%;
  height: 8px;
  background-color: ${themeGet('colors.divider')};
`
export const ScrollScreen = styled.ScrollView`
  background-color: ${themeGet('colors.background')};
`
