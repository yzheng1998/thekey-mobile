import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BlockContainer = styled.View`
  overflow: hidden;
  width: 100%;
  aspect-ratio: 1.048;
`

export const BackgroundProfilePic = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const ProfilePic = styled.Image`
  width: 171;
  border-radius: ${171 / 2};
  aspect-ratio: 1;
`

export const EventTitleText = styled.Text`
  font-size: 24;
  line-height: 29;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontTag')};
  margin-top: 24px;
  margin-bottom: 3px;
`

export const LocationText = styled.Text`
  font-size: 18;
  line-height: 21;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontCard')};
`
