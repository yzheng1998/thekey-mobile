import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BlockContainer = styled.View`
  width: 100%;
`

export const BioText = styled.Text`
  font-size: 18;
  line-height: 23;
  font-family: ${themeGet('fonts.light')};
  color: ${themeGet('colors.textAreaText')};
  margin-left: 16;
  margin-right: 16;
`

export const TextButton = styled.TouchableOpacity``
