import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const RowContainer = styled.View`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
`

export const Title = styled.Text`
  flex: 2;
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
`

export const BlockTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
`

export const Content = styled.TextInput`
  flex: 3;
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontProfileFields')};
`

export const ContactContent = styled.TextInput`
  font-size: 18px;
  font-family: ${themeGet('fonts.light')};
  line-height: 23px;
  color: ${themeGet('colors.fontProfileFields')};
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 5px;
`

export const ContactContainer = styled.View`
  margin-bottom: 12px;
`

export const Contact = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-top: 5;
  margin-bottom: 5;
  padding-left: 16;
  padding-right: 16;
`
