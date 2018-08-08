import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 40px;
  flex: 1;
  background-color: ${themeGet('colors.buttonSecondary')};
`
export const List = styled.ScrollView`
  flex: 1;
`
