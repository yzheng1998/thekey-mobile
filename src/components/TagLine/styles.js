import styled from 'styled-components'

export const TagList = styled.View`
  margin: 11px;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: row;
  max-height: ${props =>
    !Number.isNaN(props.maxLines) ? props.maxLines * 42.5 : 85};
`
