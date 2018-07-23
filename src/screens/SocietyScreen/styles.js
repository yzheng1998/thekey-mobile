import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  background-color: ${themeGet('colors.buttonSecondary')};
  flex: 1;
`
export const CardContainer = styled.View`
  padding-top: 15px;
`
export const SwiperContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
