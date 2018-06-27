import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  overflow: hidden;
  background-color: ${themeGet('colors.background')};
  flex-direction: row;
  padding: 10px;
`
export const Wrapper = styled.View`
  padding: 10px;
  flex: 1;
  align-items: flex-start;
`
export const TitleWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`
export const TitleWrapper2 = styled.View`
  margin-bottom: 5px;
  flex: 1;
  margin-left: -60px;
`
export const Name = styled.Text`
  font-size: 18px;
  margin-right: 80px;
  color: ${themeGet('colors.fontTitle')};
`
export const Message = styled.Text`
  font-size: 13px;
  margin-right: 20px;
  font-style: italic;
  color: ${themeGet('colors.fontDescription.secondary')};
`
export const ProfileImage = styled.Image`
  border-radius: 30px;
  height: 60px;
  width: 60px;
  align-self: center;
`
export const TimeStamp = styled.Text`
  font-size: 12;
  align-self: flex-end;
  color: ${themeGet('colors.fontTitle')};
`
