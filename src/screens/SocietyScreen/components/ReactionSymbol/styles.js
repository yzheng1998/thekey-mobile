import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const SymbolContainer = styled.View`
  background-color: ${props =>
    props.reaction ? themeGet('colors.like') : themeGet('colors.dislike')};
  width: ${props => (props.width ? props.width : 88)};
  height: ${props => (props.width ? props.width : 88)};
  border-radius: ${props => (props.width ? props.width / 2 : 44)};
  justify-content: center;
  align-items: center;
`

export const ReactionImage = styled.Image`
  width: 75%;
  height: 75%;
`
