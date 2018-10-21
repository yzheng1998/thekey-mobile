import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ContainerRow = styled.View`
  flex-direction: row;
  width: 100%;
`

export const Container = styled.View`
  margin-right: 14px;
  margin-left: 14px;
  margin-top: 12px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.background')};
  flex: 1;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${themeGet('colors.textInputBorder')};
  padding-top: 18px;
  padding-bottom: 18px;
`

export const Number = styled.TextInput`
  font-size: 32px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.verificationNumber')};
`
