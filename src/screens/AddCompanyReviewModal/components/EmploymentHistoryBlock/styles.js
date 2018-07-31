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
