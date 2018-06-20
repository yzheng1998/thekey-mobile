import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ConnectionsRowContainer = styled.View`
  flex-direction: row;
  margin-left: 16;
  margin-bottom: 19;
`

export const MutualConnections = styled.Text`
  font-size: 16;
  line-height: 19;
  font-family: ${themeGet('fonts.medium')};
  color: rgb(148, 157, 170);
  margin-left: 8;
`
export const AvatarContainer = styled.View`
  flex-direction: row;
`

export const Avatar = styled.Image`
  height: ${props => (props.avatarSize ? props.avatarSize : 24)};
  width: ${props => (props.avatarSize ? props.avatarSize : 24)};
  margin: -3px;
  border-color: white;
  border-width: 1.5;
  border-radius: ${props => (props.avatarSize ? props.avatarSize / 2 : 12)};
`
