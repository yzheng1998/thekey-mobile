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
  margin-bottom: 10px;
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
  text-align: center;
`

export const GenderButton = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 8px;
  height: 50px;
  margin-left: 12px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.clicked
      ? themeGet('colors.activeTag')
      : themeGet('colors.textAreaBorder')};
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 16px;
  color: white;
`
