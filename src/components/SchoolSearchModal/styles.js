import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: ${themeGet('colors.background')};
  padding-top: 30px;
`

export const Divider = styled.View`
  height: 8px;
  background-color: ${themeGet('colors.divider')};
`
export const SchoolModal = styled(Modal)`
  margin: 0px;
  flex: 1;
`

export const Text = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontDescription.primary')};
  font-size: 16px;
  text-align: center;
  align-self: center;
  margin-top: 16px;
  line-height: 22px;
`
