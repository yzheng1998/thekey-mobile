import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BigContainer = styled.View`
  flex: 1;
`
export const BackButtonContainer = styled.TouchableOpacity`
  margin-top: 25px;
  width: 4%;
`
export const Container = styled.ScrollView`
  margin: 24px;
  flex: 1;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 34px;
  padding-bottom: 24px;
`
export const Header = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 16px;
  padding-bottom: 8px;
`
export const Body = styled.Text`
  font-family: ${themeGet('fonts.light')};
  font-size: 18px;
  padding-bottom: 24px;
  color: ${themeGet('colors.fontDescription.tertiary')};
`
export const Subtitle = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px;
  padding-bottom: 3px;
  color: ${themeGet('colors.fontSubtitle.primary')};
`
export const Detail = styled.Text`
  font-family: ${themeGet('fonts.light')};
  font-size: 18px;
  padding-bottom: 8px;
  color: ${themeGet('colors.fontDescription.tertiary')};
`
