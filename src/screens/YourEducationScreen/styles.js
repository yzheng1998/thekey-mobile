import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
  align-items: center;
`

export const Instructions = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  text-align: center;
`

export const InstructionsContainer = styled.View`
  margin-top: 16px;
`
export const AddEducationButton = styled.TouchableOpacity`
  width: 87%;
  height: 50px;
  border-radius: 8px;
  border-width: 2px
  border-color: ${themeGet('colors.buttonPrimary')};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 32px;
`
export const ButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: ${props => props.size || '16px'};
  color: ${themeGet('colors.buttonPrimary')};
`
