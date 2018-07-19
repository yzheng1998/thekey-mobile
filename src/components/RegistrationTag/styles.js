import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Tag = styled.TouchableOpacity`
  height: 50px;
  background-color: ${props =>
    props.color
      ? themeGet('colors.activeTag')
      : themeGet('colors.textAreaBorder')};
  border-radius: 10px;
  align-items: center;
  margin-right: 7px;
  margin-top: 8px;
  flex-wrap: wrap;
`
export const TagText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 14px;
  color: white;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
`
