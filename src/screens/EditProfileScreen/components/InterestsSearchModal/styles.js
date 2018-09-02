import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
  background-color: ${themeGet('colors.background')};
`
export const Container = styled.View`
  padding: 10px;
`
export const Text = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontDescription.primary')};
`
export const InputField = styled.TextInput`
  font-size: 14px;
  color: ${themeGet('colors.fontDescription.primary')};
  font-family: ${themeGet('fonts.medium')};
  max-height: 50px;
  overflow: scroll;
`
export const SearchNameContainer = styled.View`
  flex-direction: row;
  padding-left: 6px;
  padding-right: 6px;
  align-items: center;
`
export const PeopleListContainer = styled.View`
  background-color: ${themeGet('colors.background')};
  flex: 1;
`
export const ThinDivider = styled.View`
  height: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: -10px;
  margin-right: -10px;
  background-color: ${themeGet('colors.divider')};
`
