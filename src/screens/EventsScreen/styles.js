import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.ScrollView`
  background-color: white;
`
export const ButtonContainer = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: flex-end;
`
export const SmallCardContainer = styled.View`
  box-shadow: 1px 13px 8px rgb(169,169,169)};
`
export const Spacer = styled.View`
  height: 180px;
  width: 100%;
`
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 40px;
  padding-bottom: 10px;
`
export const MoreEventsHeader = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 40px;
  padding-bottom: 10px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.bold')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
`
export const Subtitle = styled.Text`
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
  margin-left: 20px;
  margin-bottom: 3px;
`
export const Description = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.bold')};
  font-size: 16px;
  margin-left: 20px;
  margin-bottom: 20px;
`
export const NewEventButton = styled.TouchableOpacity``
