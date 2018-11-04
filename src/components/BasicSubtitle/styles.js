import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  align-items: center;
  width: 100%;
<<<<<<< HEAD
`

export const Subtitle = styled.Text`
=======
  padding-left: 12px;
  padding-right: 12px;
`
export const Subtitle = styled.Text`
  text-align: center;
>>>>>>> 1a889e9... Implemented Introduction Screen design
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 16px;
  font-family: ${themeGet('fonts.regular')};
  line-height: 20px;
  color: ${themeGet('colors.fontSubtitle.primary')};
`
