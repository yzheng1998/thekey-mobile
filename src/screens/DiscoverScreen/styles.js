import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  padding-top: 20px;
  flex: 1;
  background-color: ${themeGet('colors.buttonSecondary')};
`
export const List = styled.ScrollView`
  padding-top: 10px;
  padding-bottom: 40px;
  flex: 1;
  padding-right: 12px;
  padding-left: 12px;
`
