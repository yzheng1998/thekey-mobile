import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`
export const SafeView = styled.SafeAreaView`
  flex: 1;
`
export const Text = styled.Text`
  font-size: 40px;
`
