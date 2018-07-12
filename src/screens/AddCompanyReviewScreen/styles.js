import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScreenScroll = styled.ScrollView`
  width: 100%;
`
export const Background = styled.View`
  flex: 1;
  padding-top: 30px;
`
export const BlockBackground = styled.View`
  padding: 15px;
  width: 100%;
`
export const Heading = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
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
  margin-top: 10px;
  margin-bottom: 10px;
`
export const RowHeader = styled.View`
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
  margin-bottom: 8px;
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
