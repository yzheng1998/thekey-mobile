import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  padding-bottom: 100px;
`
export const HeaderBackground = styled.View`
  height: 10px;
`
export const EventsContainer = styled.ScrollView`
  height: 100%;
`
export const EventContainer = styled.View`
  box-shadow: 10px 10px 9px ${themeGet('colors.shadow')};
`
