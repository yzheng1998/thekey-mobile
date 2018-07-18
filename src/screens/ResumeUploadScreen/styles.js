import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

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
  text-align: center;
  color: ${props =>
    props.hyperlink
      ? themeGet('colors.fontButtonTertiary')
      : themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px
  line-height: 20px;
`

export const ResumeItemContainer = styled.View`
  width: 100%;
  height: 68px;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
`

export const ResumeBody = styled.View`
  flex-direction: column;
  margin-left: 10px;
  width: ${width * 0.672};
`

export const ResumeDetails = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 10px;
`

export const ResumeTitle = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontHeader')};
  font-size: 16px;
`

export const ResumeDataSize = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontDescription.primary')};
  font-size: 12px;
`

export const ClearIconButton = styled.TouchableOpacity`
  margin-right: 8px;
  margin-left: 8px;
`

export const ProgressBar = styled.View`
  height: 4px;
  width: 100%;
  flex-direction: row;
  border-radius: 2px;
  overflow: hidden;
`
export const ProgressBarFilled = styled.View`
  width: ${props => props.progress};
  background-color: ${themeGet('colors.buttonPrimary')};
`

export const ProgressBarUnfilled = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.textAreaBorder')};
`
