import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { ButtonGroup } from 'react-native-elements'

export const Buttons = styled(ButtonGroup)``
export const ButtonContainer = styled.View`
  margin-top: 5px;
  margin-bottom: -6px;
`
export const StarsContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  height: 32;
  margin-top: 6px;
`
export const RowSubContainer = styled.View`
  width: 50%;
  padding-left: 6px;
  padding-right: 10px;
  justify-content: space-between;
  flex-direction: row;
`
export const SpacedHeading = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
`
export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`
export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`
export const SwitchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`
export const Label = styled.Text`
  font-size: 16px;
  color: ${props =>
    props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
