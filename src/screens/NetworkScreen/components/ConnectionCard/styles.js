import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  width: 100%;
  overflow: hidden;
  background-color: ${themeGet('colors.background')};
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: ${themeGet('colors.divider')};
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
  width: 80%;
`
export const TextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  width: 80%;
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
  border-radius: 30px;
  height: 60px;
  width: 60px;
  align-self: center;
`
export const TimeStamp = styled.Text`
  font-size: 12;
  align-self: flex-end;
  color: ${themeGet('colors.fontTitle')};
  position: absolute;
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
