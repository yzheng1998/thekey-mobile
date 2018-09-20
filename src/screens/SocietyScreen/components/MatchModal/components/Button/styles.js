import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 12px;
  margin-bottom: 12px;
  height: 50px;
  margin-left: 24px;
  margin-right: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-color: ${themeGet('colors.background')};
  border-radius: 8px;
  border-width: 2px;
`

export const ButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 14px;
  line-height: 23px;
  color: ${themeGet('colors.fontPrimary')};
`
