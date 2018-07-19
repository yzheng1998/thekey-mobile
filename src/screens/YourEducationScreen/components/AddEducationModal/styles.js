import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

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

export const RightModal = styled(Modal)`
  flex: 1;
  margin: 0;
`

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const SwitchLabel = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  margin-left: 12px;
`
