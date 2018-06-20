import styled from 'styled-components'

export const TagList = styled.View`
  margin: 11px;
  background-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row;
  height: ${props => (props.height ? props.height : 85)};
`
