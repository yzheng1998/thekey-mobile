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
  font-size: 14px;
  line-height: 20px;
`

export const FacebookButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 12px;
`
export const ColumnContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
export const DividerText = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontDescription.primary')};
  font-size: 12px;
`
export const Divider = styled.View`
  width: 46%;
  background-color: ${themeGet('colors.fontDescription.primary')};
  height: 1px;
  margin-left: 3px;
  margin-right: 3px;
`
export const DividerRow = styled.View`
  flex-direction: row;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 12px;
  align-items: center;
`
