import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

export const Background = styled.View`
  padding-top: 10px;
`
export const Container = styled.View`
  padding: 10px;
`
export const Text = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontDescription.primary')};
`
export const ScrollScreen = styled.ScrollView`
  margin-bottom: 120px;
`
export const InputField = styled.TextInput`
  font-size: 14px;
  color: ${themeGet('colors.fontDescription.primary')};
  font-family: ${themeGet('fonts.medium')};
  max-height: 50px;
  overflow: scroll;
`
export const SearchNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
`
export const PeopleListContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const ThinDivider = styled.View`
  width: 100%;
  height: 4px;
  margin: 5px;
  background-color: ${themeGet('colors.divider')};
`
export const SearchModal = styled(Modal)`
  margin: 0px;
  background-color: ${themeGet('colors.background')};
`
