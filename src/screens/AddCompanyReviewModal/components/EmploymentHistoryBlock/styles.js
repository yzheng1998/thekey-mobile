import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { ButtonGroup } from 'react-native-elements'

export const Buttons = styled(ButtonGroup)`
  margin-top: 10px;
`
export const StarsContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  height: 38;
`
export const SubBlock = styled.View`
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  flex: 1;
  justify-content: flex-start;
`
export const SpacedHeading = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`
