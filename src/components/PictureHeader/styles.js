import styled from 'styled-components'

export const BlockContainer = styled.View`
  overflow: hidden;
  width: 100%;
`

export const BackgroundPicture = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Picture = styled.Image`
  width: ${props => (props.avatarSize ? props.avatarSize : 171)};
  border-radius: ${props =>
    props.avatarSize ? props.avatarSize / 2 : 171 / 2};
  aspect-ratio: 1;
`
