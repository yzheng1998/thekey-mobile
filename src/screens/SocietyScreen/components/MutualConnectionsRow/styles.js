import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ConnectionsRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 16px;
  margin-bottom: 19px;
  position: absolute;
  bottom: 3px;
`
export const MutualConnections = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  margin-left: 8px;
`
export const AvatarContainer = styled.View`
  flex-direction: row;
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
