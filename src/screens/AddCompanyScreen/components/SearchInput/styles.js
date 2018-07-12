import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.TextInput`
  height: 56px;
  width: 100%;
  flex-direction: row;
  background-color: white;
  padding-left: 13px;
  font-size: 18px;
  color: ${themeGet('colors.fontDescription.primary')};
  font-family: ${themeGet('fonts.medium')};
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
  padding-bottom: 13px;
  padding-left: 16px;
  flex: 1;
`
export const Divider = styled.View`
  height: 23px;
  width: 100%;
  background-color: ${themeGet('colors.divider')};
  padding: 4px;
  padding-left: 16px;
`
export const DividerText = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontButtonSecondary')};
  font-size: 12px;
`
