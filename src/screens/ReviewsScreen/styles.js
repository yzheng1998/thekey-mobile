import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Divider = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${themeGet('colors.divider')};
`
