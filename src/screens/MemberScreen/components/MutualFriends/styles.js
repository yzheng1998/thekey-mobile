import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ConnectionsRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-left: 3px;
`
export const Avatar = styled.Image`
  height: ${props => (props.avatarSize ? props.avatarSize : 24)};
  width: ${props => (props.avatarSize ? props.avatarSize : 24)};
  margin-left: -3px;
  border-color: white;
  border-width: 1.5;
  border-radius: ${props => (props.avatarSize ? props.avatarSize / 2 : 12)};
`
export const Number = styled.Text`
  position: absolute;
  top: 4px;
  right: 6px;
  color: white;
  font-size: 12px;
  font-family: ${themeGet('fonts.bold')};
`
export const Container = styled.View`
  align-items: center;
`
