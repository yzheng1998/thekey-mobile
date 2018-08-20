import styled from 'styled-components'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const SmallCardContainer = styled.View` 
  margin-top: 16px;
  width: ${width * 0.872};
  margin-left: 8px;
  margin-right: 8px;
  padding-bottom: 20px;
  box-shadow: 1px 13px 8px rgb(169,169,169)};
`
