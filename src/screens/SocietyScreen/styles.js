import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  background-color: ${themeGet('colors.buttonSecondary')};
  flex: 1;
`
export const HeaderBackground = styled.View`
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  background-color: black;
  padding-top: 30px;
`
export const Title = styled.Text`
  color: ${themeGet('colors.fontPrimary')};
  font-family: ${themeGet('fonts.heavy')};
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 18px;
`
export const ButtonRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 22;
  padding-right: 22;
  width: 100%;
  position: absolute;
  justify-content: space-between;
  top: 15px;
`
export const SwiperContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
