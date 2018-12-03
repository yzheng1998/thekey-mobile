import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Icon from 'react-native-vector-icons/Ionicons'

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`

export const ContentContainer = styled.View`
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
  margin-bottom: 8px;
`

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const SearchIcon = styled(Icon)`
  background-color: transparent;
  color: ${themeGet('colors.fontSubtitle.primary')};
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`
