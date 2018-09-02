import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  width: 99%;
  background-color: ${themeGet('colors.background')};
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: ${themeGet('colors.divider')};
`
export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 10px;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 7px;
`
export const Content = styled.View`
  width: 75%;
`
export const ButtonRow = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
  width: 100%;
`
export const TextContainer = styled.View`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 5px;
`
export const Name = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontTitle')};
  font-family: ${themeGet('fonts.bold')};
  margin-right: 4px;
`
export const Subtitle = styled.Text`
  font-size: 14px;
  padding-top: 3px;
  color: ${themeGet('colors.fontDescription.secondary')};
  font-family: ${themeGet('fonts.medium')};
`
export const ProfileImage = styled.Image`
  border-radius: 25px;
  height: 50px;
  width: 50px;
`
export const TimeStamp = styled.Text`
  font-size: 12;
  color: ${themeGet('colors.fontTitle')};
  margin-top: 3px;
`
export const ImageButton = styled.TouchableOpacity`
  align-self: center;
`
