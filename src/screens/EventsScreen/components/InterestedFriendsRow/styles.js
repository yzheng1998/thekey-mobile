import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ConnectionsRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`
export const InterestedFriendsContainer = styled.Text`
  font-size: 16;
  line-height: 19;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
  margin-left: 5px;
`
export const AvatarContainer = styled.View`
  flex-direction: row;
`
export const Avatar = styled.Image`
  height: ${props => (props.avatarSize ? props.avatarSize : 24)};
  width: ${props => (props.avatarSize ? props.avatarSize : 24)};
  border-color: white;
  border-width: 1.5;
  border-radius: ${props => (props.avatarSize ? props.avatarSize / 2 : 12)};
`
