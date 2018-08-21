import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BlockContainer = styled.View``
export const ContentContainer = styled.View`
  align-items: center;
`
export const PictureContainer = styled.View`
  margin-top: ${props => (props.marginTop ? props.marginTop : 70)};
`

export const SafeView = styled.SafeAreaView`
  align-items: center;
  flex: 1;
`
export const BackgroundPicture = styled.ImageBackground`
  align-items: center;
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
`
