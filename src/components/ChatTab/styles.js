import styled from 'styled-components'

export const Categories = styled.Text`
  font-size: ${props => (props.isSelected ? '24px' : '17px')};
  font-weight: 900;
  font-family: 'SF Pro Display';
  color: black;
  margin-left: 20px;
  opacity: ${props => (props.isSelected ? '1' : '0.9')};
`

export const Tab = styled.TouchableOpacity`
  width: 100%;
  background-color: transparent;
  align-items: center;
  flex-direction: row;
  margin-right: 9px;
`
