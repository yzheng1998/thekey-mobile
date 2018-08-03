import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const SafeView = styled.SafeAreaView`
  flex: 1;
`
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
  margin-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
`

export const Subtitle = styled.Text`
  color: ${props =>
    props.hyperlink
      ? themeGet('colors.fontButtonTertiary')
      : themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
  font-size: 14px
  line-height: 20px;
`
export const ColumnContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
