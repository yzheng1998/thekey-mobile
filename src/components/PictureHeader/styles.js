import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BlockContainer = styled.View`
  overflow: hidden;
  width: 100%;
`
export const ContentContainer = styled.View`
  flex: 1;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  height: ${props => (props.height ? props.height : 365)};
`
export const PictureContainer = styled.View``

export const SafeView = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`
export const BackgroundPicture = styled.ImageBackground`
  width: 100%;
  height: ${props => (props.height ? props.height : 365)};
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
export const MiniQRCode = styled.TouchableHighlight`
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  width: 38px;
  height: 38px;
  background-color: white;
  bottom: 0px;
  left: 0px;
`
export const Tint = styled.View`
  background-color: ${themeGet('colors.pictureHeaderTint')};
  width: 100%;
  position: absolute;
`
