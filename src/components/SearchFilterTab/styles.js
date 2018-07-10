import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Categories = styled.Text`
  font-size: ${props => (props.isSelected ? '23px' : '16px')};
  font-weight: 700;
  font-family: '${themeGet('fonts.light')}';
  color: ${props => (props.isSelected ? props.selectedColor : props.color)};
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
