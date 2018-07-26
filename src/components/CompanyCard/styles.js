import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  overflow: hidden;
  background-color: white;
  flex-direction: row;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;
`
export const LeftContainer = styled.View`
  align-items: flex-start;
  padding-top: 13px;
  margin-left: 13px;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.border')};
  flex: 1;
  height: 100%;
  padding-bottom: 5px;
`
export const Title = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
  padding-bottom: 5px;
`
export const Description = styled.Text`
  font-size: 13px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontDescription.primary')};
`
export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-bottom: 13px;
`
