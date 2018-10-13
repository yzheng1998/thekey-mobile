import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  padding-bottom: 100px;
`
export const HeaderBackground = styled.View`
  height: 10px;
`
export const EventContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 10px 10px 9px ${themeGet('colors.shadow')};
`
