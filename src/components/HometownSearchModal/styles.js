import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${themeGet('colors.background')};
  padding-top: 30px;
`

export const Divider = styled.View`
  height: 8px;
  background-color: ${themeGet('colors.divider')};
`
