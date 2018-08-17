import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ListContainer = styled.ScrollView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${themeGet('colors.background')};
  height: 55px;
  border-bottom-color: ${themeGet('colors.divider')};
  border-bottom-width: 3px;
  padding-left: 16px;
  padding-right: 16px;
`
export const ListItemTitle = styled.Text`
  font-family: ${themeGet('fonts.semiBold')};
  font-size: 16px;
`
export const Footing = styled.View`
  height: 30px;
`
