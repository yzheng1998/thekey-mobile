import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  background-color: ${themeGet('colors.background')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0px')};
`
export const AvatarContainer = styled.View`
  margin-left: 16px;
  margin-right: 15px;
`
export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`
export const TopContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: ${props => (props.isCard ? 16 : 0)};
`
export const LeftContainer = styled.View`
  flex-direction: row;
`
export const Deadline = styled.Text`
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
  font-family: ${themeGet('fonts.bold')};
  align-self: center;
`
export const ContentContainer = styled.View``
export const Title = styled.Text`
  line-height: 21px;
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
  padding-bottom: 2px;
`
export const Host = styled.Text`
  font-size: 16px;
  line-height: 19px;
  margin-top: 2px;
  font-family: ${themeGet('fonts.semiBold')};
  color: ${themeGet('colors.fontSubtitle.primary')};
`
export const Description = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.medium')};
  margin-top: 4px;
  color: ${themeGet('colors.fontDescription.primary')};
`
export const RightContainer = styled.View`
  margin-right: 24px;
  margin-bottom: 18px;
`
export const TagsContainer = styled.View``
export const StarContainer = styled.TouchableOpacity``
