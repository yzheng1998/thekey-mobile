import styled from 'styled-components'
import { themeGet } from 'styled-system'

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
  margin-bottom: 64px;
`

export const EditButton = styled.TouchableOpacity`
  height: 40;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(7, 12, 27, 0.6);
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const EditLabel = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontCard')};
  font-size: 13;
  margin-left: 3;
`
