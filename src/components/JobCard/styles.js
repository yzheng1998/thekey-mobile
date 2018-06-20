import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 140px;
  overflow: hidden;
  background-color: white;
  flex-direction: row;
  padding: 10px;
`
export const LeftContainer = styled.View`
  padding: 10px;
  align-items: flex-start;
  padding-right: -15px;
`
export const Deadline = styled.Text`
  font-size: 12px;
  font-family: '${themeGet('fonts.bold')}';
  padding-left: 14px;
`
export const ContentContainer = styled.View`
  padding-top: 10px;
  flex: 1;
  align-items: flex-start;
  margin-left: 12px;
`
export const Title = styled.Text`
  font-size: 18px;
  font-family: '${themeGet('fonts.bold')}';
  padding-bottom: 2px;
`
export const Host = styled.Text`
  font-size: 15px;
  font-family: '${themeGet('fonts.medium')}';
  color: rgb(148,157,170);
  padding-bottom: 4px;
`
export const Description = styled.Text`
  font-size: 12px;
  font-family: '${themeGet('fonts.medium')}';
  color: rgb(176,186,200);
`
export const TagsContainer = styled.View`
  margin-left: -16px;
  margin-top: -6px;
`
export const InfoContainer = styled.View`
  flex-direction: row;
  margin-left: -13px;
  margin-top: -9px;
`
export const StarContainer = styled.View`
  padding-top: 20px;
  padding-right: 20px;
`
