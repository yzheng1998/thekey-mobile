import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon1 from 'react-native-vector-icons/Foundation'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import Icon3 from 'react-native-vector-icons/Feather'

export const Card = styled.TouchableOpacity`
  width: 90%;
  height: 400px;
  padding: 20px;
  border-radius: 20px;
  align-items: flex-start;
  overflow: hidden;
`
export const BackgroundImage = styled.Image`
  position: absolute;
  width: 115%;
  opacity: 0.9;
  height: 400px;
  overflow: hidden;
`
export const TopContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const ContentContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 60px;
  padding-left: 5px;
  margin-bottom: 30px;
`
export const Title = styled.Text`
  font-size: 34px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontPrimary')};
`
export const Location = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
`
export const DetailsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 10px;
`
export const DateTime = styled.Text`
  font-size: 15px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.secondary')};
  margin-left: 3px;
  margin-top: 1px;
`
export const PriceContainer = styled.View`
  border-radius: 20px;
  border-width: 1px;
  width: 95px;
  height: 35px;
  margin: 5px;
  border-color: ${themeGet('colors.fontPrimary')};
  align-items: center;
  justify-content: center;
`
export const Price = styled.Text`
  font-size: 15px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontPrimary')};
`
export const StarButton = styled.TouchableOpacity`
  width: 40%;
  height: 30px;
  margin: 10px;
  align-items: flex-end;
`
export const ClockIcon = styled(Icon1)`
  color: ${themeGet('colors.fontSubtitle.secondary')};
`
export const LocationIcon = styled(Icon2)`
  color: ${themeGet('colors.fontPrimary')};
`
export const StarIcon = styled(Icon3)`
  color: ${themeGet('colors.fontPrimary')};
`