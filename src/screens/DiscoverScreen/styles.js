import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
  flex: 1;
  background-color: ${themeGet('colors.buttonSecondary')};
`
export const List = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  flex: 1;
  width: 100%;
  align-self: center;
`
