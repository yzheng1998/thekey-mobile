import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

export const Background = styled(Modal)`
  flex: 1;
  margin: 0px;
  background-color: ${themeGet('colors.background')};
`
