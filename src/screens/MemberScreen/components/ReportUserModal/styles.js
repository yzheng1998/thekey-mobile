import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

export const SafeView = styled.SafeAreaView`
  flex: 1;
`
export const View = styled.View`
  flex: 1;
`
export const ScrollView = styled.ScrollView`
  flex: 1;
`
export const Background = styled(Modal)`
  margin: 0px;
  background-color: ${themeGet('colors.background')};
`
export const TextContainer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
`
export const BackButton = styled.TouchableOpacity``
export const HeaderContainer = styled.View`
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`
export const Instructions = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  margin-top: 5px;
`
export const Heading = styled.Text`
  color: black;
  font-size: 34px;
  font-family: ${themeGet('fonts.heavy')};
`
export const EssayInput = styled.TextInput`
  width: 100%;
  height: 390px;
  padding: 10px;
  margin-top: 22px;
  border-radius: 8px;
  border-width: 2px;
  font-size: 18px;
  font-family: ${themeGet('fonts.light')};
  border-color: ${themeGet('colors.textAreaBorder')};
  background-color: rgb(249, 249, 249);
  overflow: scroll;
`
