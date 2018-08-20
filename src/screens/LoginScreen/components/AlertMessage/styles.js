import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const Container = styled.View`
  width: 83%;
  height: 27px;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.isError ? themeGet('colors.buttonPrimary') : 'rgb(119, 210, 103)'};
`
export const Message = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  color: white;
  font-size: 12px;
`
export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`
