import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View``
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonQuaternary')};
  padding-top: 16px;
  padding-left: 16px;
  flex: 1;
`
export const EventContainer = styled.View`
  box-shadow: 17px 18px 9px ${themeGet('colors.shadow')};
  margin: 10px;
  padding: 3px;
  padding-bottom: 20px;
`
export const Header = styled.View`
  flex-direction: row;
  width: 100%;
`
export const SeeAll = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonTertiary')};
  padding-top: 16px;
  padding-right: 16px;
`
