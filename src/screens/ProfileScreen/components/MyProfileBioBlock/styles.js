import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BlockContainer = styled.View`
  margin-top: 12px;
`
export const BioText = styled.Text`
  font-size: 18px;
  line-height: 23px;
  font-family: ${themeGet('fonts.light')};
  color: ${themeGet('colors.fontDescription.tertiary')};
  margin-left: 16px;
  margin-right: 16px;
`
export const TextButton = styled.TouchableOpacity``
