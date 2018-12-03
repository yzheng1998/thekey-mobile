import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Screen = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${themeGet('colors.background')};
`

// Row Containers are used to wrap line inputs so that when the screen shrinks
// e.g. when the keyboard is up on a smaller screen, the line inputs don't get pushed together,
// and therefore, the error messages from one input doesn't cover the other input.
export const RowContainer = styled.View``
