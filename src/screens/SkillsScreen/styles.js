import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScreenContainer = styled.View`
  flex: 1;
`
export const Container = styled.ScrollView`
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${themeGet('colors.background')};
`
export const Subtitle = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  text-align: center;
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
  margin-bottom: 75px;
`
