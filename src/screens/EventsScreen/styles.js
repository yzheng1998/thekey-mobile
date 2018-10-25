import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.ScrollView`
  background-color: white;
`
export const SmallCardContainer = styled.View`
  margin-left: 24px;
  margin-right: 24px;
  box-shadow: 1px 13px 8px rgb(169, 169, 169);
`
export const MoreEventsHeader = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 40px;
  padding-bottom: 10px;
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
