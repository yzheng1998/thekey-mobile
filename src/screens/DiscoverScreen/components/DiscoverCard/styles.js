import styled from 'styled-components'

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  margin: 11px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
