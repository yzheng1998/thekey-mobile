import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  width: 100%;
  background-color: ${themeGet('colors.background')};
  align-items: center;
  padding-top: 40px;
`
export const TitleRow = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
export const ProgressBarContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  align-items: center;
`
