import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Title = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 20px;
  padding-top: 30px;
  letter-spacing: 0.9px;
  flex: 2;
  padding-right: 50px;
`
export const Container = styled.ScrollView`
  padding-left: 24px;
  padding-right: 24px;
`
export const Header = styled.View`
  height: 80px;
  width: 100%;
  background-color: white;
  justify-content: center;
  flex-direction: row;
`
export const GreenProgressBar = styled.View`
  height: 4px;
  width: 216px;
  background-color: ${themeGet('colors.progressBarPrimary')};
  border-radius: 15px;
  margin-top: -4px;
`
export const ProgressBar = styled.View`
  height: 4px;
  width: 100%;
  background-color: ${themeGet('colors.progressBarEmpty')};
  border-radius: 15px;
`
export const Subtitle = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
`
export const TagsRow = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 8px;
`
export const TagsContainer = styled.View`
  height: 100%;
  margin-bottom: 12px;
`
export const BackButtonContainer = styled.TouchableOpacity`
  width: 4%;
  flex: 1;
  margin-top: 30px;
`
