import styled from 'styled-components'

export const Card = styled.TouchableOpacity`
  width: 92%;
  height: 130px;
  margin: 10px;
  border-radius: 15;
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
  font-size: 24;
  font-weight: 900;
<<<<<<< HEAD
  font-family: 'SF Pro Display';
=======
>>>>>>> Feature/DiscoverCardNavigation
  color: white;
  padding: 5px;
`
export const Description = styled.Text`
  font-size: 16;
<<<<<<< HEAD
  font-family: 'SF Pro Display';
=======
>>>>>>> Feature/DiscoverCardNavigation
  color: white;
`
export const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
  opacity: 0.6;
`
