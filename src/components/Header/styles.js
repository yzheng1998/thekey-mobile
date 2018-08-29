import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  padding-top: 40px;
  margin-bottom: ${props => (props.noMargin ? 0 : 4)};
  background-color: ${themeGet('colors.background')};
`
export const TitleRow = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
  text-align: center;
  width: 80%;
`
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 1px;
`
export const Divider = styled.View`
  background-color: ${themeGet('colors.divider')};
  height: 2px;
`
