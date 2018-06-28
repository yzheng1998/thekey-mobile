import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const TagContainer = styled.View`
  height: 32;
  border-radius: 8;
  overflow: hidden;
  margin: 5px;
`

export const TagImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const TagOverlay = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const TagText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 14;
  line-height: 16;
  color: ${themeGet('colors.fontPrimary')};
  margin-left: 9;
  margin-right: 9;
`
