import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ConnectionsRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 16;
  margin-bottom: 19;
`

export const AvatarContainer = styled.View`
  flex-direction: row;
  padding-right: 10px;
`
export const Avatar = styled.Image`
  height: ${props => (props.avatarSize ? props.avatarSize : 24)};
  width: ${props => (props.avatarSize ? props.avatarSize : 24)};
  margin: -3px;
  border-color: white;
  border-width: 1.5;
  border-radius: ${props => (props.avatarSize ? props.avatarSize / 2 : 12)};
`
export const Number = styled.Text`
  position: absolute;
  color: white;
  font-size: 12px;
  font-family: ${themeGet('fonts.bold')};
  padding-top: 2.5px;
`
export const Container = styled.View`
  align-items: center;
`
