import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  height: 40px;
  width: 100%;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  padding-right: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${themeGet('colors.divider')};
`
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  margin-bottom: 2px;
`
