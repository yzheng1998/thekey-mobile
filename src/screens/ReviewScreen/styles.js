import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const Divider = styled.View`
  width: 100%;
  height: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${themeGet('colors.divider')};
`
export const SafeView = styled.SafeAreaView`
  flex: 1;
`
