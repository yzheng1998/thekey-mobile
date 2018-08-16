import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon1 from 'react-native-vector-icons/Foundation'

export const Card = styled.TouchableOpacity`
  height: 140px;
  border-radius: 20px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 20px;
`
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
`
export const ContentContainer = styled.View``
export const FullContainer = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Title = styled.Text`
  font-size: 24px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontPrimary')};
`

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const DateTime = styled.Text`
  font-size: 13px;
  margin-left: 3px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.secondary')};
`
export const TimeIcon = styled(Icon1)`
  color: ${themeGet('colors.fontSubtitle.secondary')};
`
export const Tint = styled.View`
  background-color: ${themeGet('colors.eventCardTint')};
  flex: 1;
`
export const AvatarRowContainer = styled.View`
  height: 20px;
  margin-top: 12px;
`
