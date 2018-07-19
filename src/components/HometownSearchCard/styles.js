import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 68px;
  justify-content: center;
`
export const City = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 16px;
  letter-spacing: -0.2;
  margin-left: 16px;
`

export const State = styled.Text`
  font-family: ${themeGet('fonts.semiBold')};
  color: ${themeGet('colors.fontDescription.quaternary')};
  font-size: 12px;
  letter-spacing: -0.1;
  margin-left: 16px;
`
