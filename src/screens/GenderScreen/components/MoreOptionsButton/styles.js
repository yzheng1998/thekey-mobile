import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { GenderButton, ButtonText } from './../../styles'

export const Button = styled(GenderButton)`
  background-color: ${themeGet('colors.background')};
  border: 1px;
  border-color: ${themeGet('colors.fontDescription.quaternary')};
`
export const MoreOptionsButtonText = styled(ButtonText)`
  color: ${themeGet('colors.fontDescription.quaternary')};
`

export const ButtonWrapper = styled.View`
  margin-bottom: 70px;
`
