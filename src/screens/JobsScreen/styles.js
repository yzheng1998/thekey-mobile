import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
`
export const Divider = styled.View`
  width: 100%;
  height: 8px;
  background-color: ${themeGet('colors.divider')};
`
export const CardDivider = styled.View`
  height: 2px;
  background-color: ${themeGet('colors.divider')};
`
