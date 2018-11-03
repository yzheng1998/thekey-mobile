import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Graphic = styled.View`
  height: 123px;
  width: 123px;
  align-self: center;
  margin-top: 48px;
  margin-bottom: 68px;
`
export const Button = styled.TouchableOpacity`
  flex: 1;
`
export const ButtonContainer = styled.View`
  flex: 1;
  border-radius: 61.5px;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.cameraButton')};
`

export const AddButton = styled.View`
  height: 32px;
  width: 32px;
  background-color: ${themeGet('colors.buttonPrimary')};
  border-radius: 16px;
  position: absolute;
  right: 0;
  bottom: 0;
  justify-content: center;
`

export const Photo = styled.Image`
  border-radius: 61.5px;
  height: 123px;
  width: 123px;
`
