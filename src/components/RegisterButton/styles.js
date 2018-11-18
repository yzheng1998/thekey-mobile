import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  margin-top: 12px;
  margin-bottom: 8px;
  height: 50px;
  margin-left: 12px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${props => {
    if (props.secondary) {
      return themeGet('colors.background')
    }
    return props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')
  }};
  border-radius: 8px;
  border-color: ${props =>
    props.disabled ? 'transparent' : themeGet('colors.buttonPrimary')};
  border-width: ${props => (props.noBorder ? 0 : 2)};
`

export const ButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 14px;
  line-height: 23px;
  color: ${props => {
    if (props.secondary) return themeGet('colors.buttonPrimary')
    if (props.tertiary) return themeGet('colors.fontSubtitle.primary')
    return themeGet('colors.fontPrimary')
  }}
  opacity: ${props => (props.secondary && props.disabled ? 0.5 : 1)};
`
