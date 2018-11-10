import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Screen = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`

export const ContentContainer = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${themeGet('colors.background')};
`

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const RowContainer = styled.View``
