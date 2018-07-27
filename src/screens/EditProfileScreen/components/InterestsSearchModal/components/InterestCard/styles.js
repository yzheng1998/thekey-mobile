import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Card = styled.View`
  height: 30px;
  width: 100%;
  background-color: white;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  margin-bottom: 2px;
`
