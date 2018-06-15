import styled from 'styled-components'

export const TagContainer = styled.View`
  height: 32;
  background-color: rgba(0, 0, 0, 0.6);
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
  background-color: rgba(0, 0, 0, 0.5);
`

export const TagText = styled.Text`
  font-family: SFProDisplay-Bold;
  font-size: 14;
  line-height: 16;
  color: white;
  margin-horizontal: 9;
`
