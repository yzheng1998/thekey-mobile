import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  overflow: hidden;
  background-color: ${themeGet('colors.background')};
  flex-direction: row;
  padding: 10px;
  border-bottom-color: ${themeGet('colors.border')};
  border-bottom-width: 1px;
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
  border-radius: 25px;
  height: 50px;
  width: 50px;
  align-self: center;
`
export const TimeStamp = styled.Text`
  font-size: 12;
  align-self: flex-end;
  color: ${themeGet('colors.fontTitle')};
`
