import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScreenContainer = styled.ScrollView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const Divider = styled.View`
  width: 100%;
  height: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${themeGet('colors.divider')};
`
export const Container = styled.View`
  width: 100%;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: space-between;
  margin-top: 5;
  margin-bottom: 5;
  padding-left: 16;
  padding-right: 16;
`
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  line-height: 23px;
  color: ${themeGet('colors.profileTitle')};
  margin-top: 3;
  margin-bottom: 3;
`
