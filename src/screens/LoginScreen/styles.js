import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 26px;
  text-align: center;
  width: 80%;
`
export const TitleContainer = styled.View`
  justify-content: flex-end;
  height: 80px;
  align-items: center;
  margin-bottom: 30px;
`
export const ColumnContainer = styled.View`
  flex: 1;
`
