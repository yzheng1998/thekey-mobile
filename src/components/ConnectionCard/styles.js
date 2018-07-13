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
export const Container = styled.View`
  flex: 1;
  padding-left: 10px;
  align-items: flex-start;
`
export const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`
export const TimeWrapper = styled.View`
  margin-bottom: 5px;
  flex: 1;
  margin-left: -60px;
`
export const Name = styled.Text`
  font-size: 18px;
  margin-right: 80px;
  color: ${themeGet('colors.fontTitle')};
  font-family: ${themeGet('fonts.bold')};
`
export const Subtitle = styled.Text`
  font-size: 14px;
  position: absolute;
  padding-top: 3px;
  color: ${themeGet('colors.fontDescription.secondary')};
  margin-left: 85px;
  font-family: ${themeGet('fonts.medium')};
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
export const AcceptButton = styled.TouchableOpacity`
  width: 110px;
  height: 30px;
  border-radius: 7px;
  background-color: ${themeGet('colors.buttonPrimary')};
  margin-right: 8px;
  align-items: center;
`
export const DeleteButton = styled.TouchableOpacity`
  width: 110px;
  height: 30px;
  border-radius: 7px;
  border-color: ${themeGet('colors.fontDescription.primary')};
  border-width: 1px;
  align-items: center;
`
export const Confirm = styled.Text`
  font-size: 12px;
  padding-top: 7px;
  color: white;
  font-family: ${themeGet('fonts.bold')};
`
export const Delete = styled.Text`
  font-size: 12px;
  padding-top: 6px;
  color: ${themeGet('colors.fontDescription.secondary')};
  font-family: ${themeGet('fonts.bold')};
`
