import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  width: 100%;
  background-color: ${themeGet('colors.background')};
  padding-top: 40px;
  margin-bottom: 4px;
`
export const TitleRow = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 12px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 24px;
`
export const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 1px;
`
