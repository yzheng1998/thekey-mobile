import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  background-color: ${themeGet('colors.background')};
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  padding-left: 16px;
  margin-bottom: 3px;
`
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.semiBold')};
`
