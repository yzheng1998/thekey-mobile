import styled from 'styled-components'
import { Platform } from 'react-native'

export const ButtonRow = styled.View`
  position: absolute;
  top: ${Platform.OS === 'ios' ? 50 : 30};
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const BackButtonContainer = styled.TouchableOpacity``
