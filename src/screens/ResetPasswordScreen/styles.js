import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScreenContainer = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${themeGet('colors.background')};
  padding-bottom: 24px;
`
export const SubtitleView = styled.View`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  padding-left: 12px;
  padding-right: 12px;
`
export const Subtitle = styled.Text`
  color: ${props =>
    props.hyperlink
      ? themeGet('colors.fontButtonTertiary')
      : themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`
export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`
export const ButtonContainer = styled.View`
  margin-top: 54px;
  margin-left: 8px;
  margin-right: 8px;
`
