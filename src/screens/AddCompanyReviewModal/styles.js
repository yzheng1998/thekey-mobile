import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

export const ScreenScroll = styled.ScrollView`
  width: 100%;
  padding-top: 5px;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const Background = styled(Modal)`
  flex: 1;
  margin: 0px;
  background-color: ${themeGet('colors.background')};
`
export const BlockBackground = styled.View`
  padding: 16px;
  width: 100%;
`
export const Heading = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  margin-bottom: 5px;
`
export const Text = styled.Text`
  font-size: 16px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
export const InputField = styled.TextInput`
  font-size: 16px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
  max-height: 80px;
  overflow: scroll;
  max-width: 75%;
`
export const Block = styled.View`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const RowHeader = styled.View`
  margin-top: 10px;
  margin-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Image = styled.Image`
  height: 30;
  width: 30;
`
export const PickerText = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontProfileFields')};
`
export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
`
export const PickerButton = styled.TouchableOpacity`
  flex: 2;
  justify-content: space-between;
  flex-direction: row;
`
export const Divider = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${themeGet('colors.divider')};
`
