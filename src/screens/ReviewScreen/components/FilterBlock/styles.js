import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  height: 90px;
  width: 100%;
  background-color: white;
  padding-left: 24px;
  padding-top: 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${themeGet('colors.divider')};
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: black;
  font-size: 15px;
  padding-bottom: 10px;
`
export const TabContainer = styled.View`
  margin-left: -20px;
`
