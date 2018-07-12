import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon1 from 'react-native-vector-icons/Foundation'

export const Card = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '90%')};
  height: 140px;
  padding: 20px;
  border-radius: 20px;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 20px;
  margin-left: 15px;
`
export const BackgroundImage = styled.Image`
  position: absolute;
  width: 115%;
  opacity: 0.9;
  height: 150px;
  overflow: hidden;
`
export const ContentContainer = styled.View`
  width: 60%;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5px;
  margin-bottom: 10px;
`
export const FullContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 5px;
  margin-bottom: 10px;
`
export const Title = styled.Text`
  font-size: 24px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontPrimary')};
`
export const DetailsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`
export const DateTime = styled.Text`
  font-size: 13px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.secondary')};
  margin-left: 3px;
  margin-top: 1px;
`
export const StarButton = styled.TouchableOpacity`
  height: 30px;
  margin: 10px;
  margin-top: 33px;
  margin-left: 90px;
  flex-direction: column;
  align-items: flex-end;
`
export const TimeIcon = styled(Icon1)`
  color: ${themeGet('colors.fontSubtitle.secondary')};
`
