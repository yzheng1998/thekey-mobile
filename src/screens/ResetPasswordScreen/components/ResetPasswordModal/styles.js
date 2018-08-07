import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

export const Container = styled(Modal)`
  flex: 1;
  margin: 0px;
`
export const SubtitleView = styled.View`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
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
export const InputContainer = styled.View`
  margin-left: 24px;
  margin-right: 24px;
`
export const IndividualInputContainer = styled.View`
  margin-top: 22px;
`
export const TokenImage = styled.Image`
  margin-left: 3px;
`
export const ButtonContainer = styled.View`
  margin-left: 8px;
  margin-right: 8px;
`
