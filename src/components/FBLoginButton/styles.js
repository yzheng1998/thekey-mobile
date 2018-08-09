import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Button = styled.TouchableOpacity`
  margin-top: 12px;
  margin-bottom: 12px;
  height: ${props => (props.small ? 33 : 50)};
  flex-direction: row;
  background-color: ${themeGet('colors.facebookBlue')};
  border-radius: ${props => (props.small ? 4 : 8)};
  border-color: ${themeGet('colors.facebookBorder')};
  border-width: ${props => (props.small ? 0 : 2)};
`
export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: ${props => (props.small ? -20 : 0)};
`
export const ButtonText = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: ${props => (props.small ? 14 : 16)};
  line-height: 23px;
  color: ${themeGet('colors.fontPrimary')};
`
export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${props => (props.small ? '15%' : 50)}
  border-color: ${themeGet('colors.facebookBorder')};
  border-right-width: ${props => (props.small ? 0 : 1)};
`
