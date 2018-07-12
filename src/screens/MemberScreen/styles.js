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
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 16px;
  padding-right: 16px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  line-height: 23px;
  color: ${themeGet('colors.profileTitle')};
  margin-top: 3px;
  margin-bottom: 3px;
`
export const SecondaryTitle = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  line-height: 23px;
  color: ${themeGet('colors.profileTitle')};
  padding-top: 3px;
  padding-bottom: 15px;
  padding-left: 16px;
`