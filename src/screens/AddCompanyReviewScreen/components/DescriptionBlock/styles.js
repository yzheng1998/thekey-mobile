import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  flex: 1;
  width: 100%;
`
export const Heading = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
`
export const HelpText = styled.Text`
  font-size: 16px;
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
`
export const InputField = styled.TextInput`
  font-size: 18px;
  color: ${themeGet('colors.fontDescription.primary')};
  font-family: ${themeGet('fonts.light')};
  max-height: 80px;
  overflow: scroll;
`
export const Block = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const RowHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
