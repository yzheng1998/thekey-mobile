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
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 20px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
`
export const SearchButton = styled.TouchableOpacity``
export const BackButton = styled.TouchableOpacity``
