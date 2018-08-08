import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Categories = styled.Text`
  font-size: ${props => (props.isSelected ? '23px' : '16px')};
  font-weight: 700;
  font-family: '${themeGet('fonts.light')}';
  color: ${props => (props.isSelected ? props.selectedColor : props.color)};
  opacity: ${props => (props.isSelected ? '1' : '0.9')};
`

export const Tab = styled.View`
  align-items: center;
  width: ${props => (props.width ? props.width : '100%')}
  justify-content: space-between;
  flex-direction: row;
  padding-right: 20px;
  padding-left: 20px;
`
