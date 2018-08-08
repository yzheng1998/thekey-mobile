import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ShadowContainer = styled.View`
  box-shadow: 1px 9px 5px rgb(169,169,169)};
`
export const Card = styled.TouchableOpacity`
  height: 120px;
  margin-top: 11px;
  margin-bottom: 11px;
  border-radius: 15px;
  margin-right: 12px;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${themeGet('colors.cardLoading')};
`
export const TextContainer = styled.View`
  position: absolute;
  align-items: center;
`
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 900;
  font-family: 'SF Pro Display';
  color: white;
  padding: 5px;
`
export const Description = styled.Text`
  font-size: 16px;
  font-family: 'SF Pro Display';
  color: white;
`
export const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
`
