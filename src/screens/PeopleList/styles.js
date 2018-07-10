import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 40px;
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
export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
