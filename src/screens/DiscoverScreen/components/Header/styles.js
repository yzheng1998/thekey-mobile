import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
`
export const IconButton = styled.TouchableOpacity``
export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-left: 5px;
  margin-right: 5px;
`
export const TextBox = styled.View`
  justify-content: space-between;
  flex: 1;
`
export const Title = styled.Text`
  color: black;
  font-family: ${themeGet('fonts.heavy')};
  font-size: 34px;
  font-weight: bold;
`
export const Name = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.bold')};
  font-size: 14px;
`
