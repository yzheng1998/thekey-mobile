import styled from 'styled-components'
import { themeGet } from 'styled-system'

const societyCardTextColor = themeGet('colors.fontSubtitle.primary')
const eventCardTextColor = themeGet('colors.fontPrimary')

export const ConnectionsRowContainer = styled.View`
  flex-direction: row;
  margin-left: 16;
  margin-bottom: 19;
`
export const MutualConnections = styled.Text`
  font-size: 16;
  line-height: 19;
  font-family: ${themeGet('fonts.medium')};
  color: ${props =>
    props.customLabel === 'mutualConnections'
      ? societyCardTextColor
      : eventCardTextColor};
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
