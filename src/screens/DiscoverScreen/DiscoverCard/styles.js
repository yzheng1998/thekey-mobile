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
export const Wrapper = styled.View`
  position: absolute;
  align-items: center;
`
export const Tint = styled.View.attrs({
  backgroundColor: props => props.tintColor || 'rgba(52, 52, 52, 0.8)',
})`
  background-color: ${props => props.backgroundColor}
  flex: 1;
  width: 100%;
`
export const Title = styled.Text`
  font-size: 23;
  font-weight: 900;
  color: white;
  padding: 5px;
`
export const Description = styled.Text`
  font-size: 15;
  color: white;
`
export const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
  opacity: 0.6;
`
