import styled from 'styled-components'

export const BlockContainer = styled.View`
  overflow: hidden;
  width: 100%;
`
export const PictureContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`
export const SafeView = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`
export const BackgroundPicture = styled.ImageBackground`
  width: 100%;
  height: 340px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const Picture = styled.Image`
  width: ${props => (props.avatarSize ? props.avatarSize : 171)};
  border-radius: ${props =>
    props.avatarSize ? props.avatarSize / 2 : 171 / 2};
  aspect-ratio: 1;
`
