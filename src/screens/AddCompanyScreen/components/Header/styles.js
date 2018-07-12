import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  height: 88px;
  width: 100%;
  flex-direction: row;
  border-bottom-width: 4px;
  border-bottom-color: ${themeGet('colors.divider')};
  align-items: flex-end;
  justify-content: center;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: black;
  font-size: 18px;
  padding-bottom: 17px;
  position: absolute;
  flex: 1;
`
export const Cancel = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 18px;
`
export const Button = styled.TouchableOpacity`
  padding-bottom: 13px;
  padding-left: 16px;
  flex: 1;
`
