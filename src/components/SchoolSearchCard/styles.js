import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 68px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`
export const SchoolName = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 16px;
  letter-spacing: -0.2;
  margin-left: 16px;
`

export const Location = styled.Text`
  font-family: ${themeGet('fonts.semiBold')};
  color: ${themeGet('colors.fontDescription.quaternary')};
  font-size: 12px;
  letter-spacing: -0.1;
  margin-left: 16px;
`
