import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  height: 50;
  width: 100%;
  background-color: ${themeGet('colors.backgroundSecondary')};
  justify-content: center;
`
export const Title = styled.Text`
  font-size: 18px;
  font-family: ${themeGet('fonts.bold')};
  margin-left: 8px;
`
export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
`
export const DismissButton = styled.TouchableOpacity`
  width: 50;
`
