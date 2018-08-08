import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const CardDivider = styled.View`
  height: 2px;
  background-color: ${themeGet('colors.divider')};
`
