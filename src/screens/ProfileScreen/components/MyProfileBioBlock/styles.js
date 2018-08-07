import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const BlockContainer = styled.View`
  width: 100%;
  margin-top: 30px;
`
export const BioText = styled.Text`
  font-size: 18px;
  line-height: 23px;
  font-family: ${themeGet('fonts.light')};
  color: ${themeGet('colors.fontDescription.tertiary')};
  margin-top: 10px;
  margin-left: 16px;
  margin-right: 16px;
`
export const TextButton = styled.TouchableOpacity``
