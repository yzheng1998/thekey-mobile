import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const RowContainer = styled.View`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
`

export const Title = styled.Text`
  flex: 2;
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
`

export const Content = styled.TextInput`
  flex: 3;
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontProfileFields')};
`
