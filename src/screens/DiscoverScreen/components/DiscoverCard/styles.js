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
export const Tint = styled.View`
  background-color: ${props =>
    props.tintColor ? props.tintColor : 'rgba(52, 52, 52, 0.8)'}
  flex: 1;
  width: 100%;
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
  opacity: 0.6;
`
