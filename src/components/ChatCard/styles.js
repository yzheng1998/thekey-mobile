import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  overflow: hidden;
  background-color: ${themeGet('colors.background')};
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  border-bottom-color: ${themeGet('colors.border')};
  border-bottom-width: 1px;
`
export const Wrapper = styled.View`
  padding-left: 10px;
  padding-right: 20px;
  flex: 1;
`
export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`
export const TitleWrapper2 = styled.View``
export const Name = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontTitle')};
`
export const Message = styled.Text`
  font-size: 13px;
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
  color: ${themeGet('colors.fontTitle')};
`
