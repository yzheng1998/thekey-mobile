import styled from 'styled-components'
import { themeGet } from 'styled-system'

const progressBarHeight = '4px'

export const EmptyBar = styled.View`
  width: 90%;
  background-color: ${themeGet('colors.progressBarEmpty')};
  height: ${progressBarHeight};
  border-radius: 8px;
  overflow: hidden;
`
export const FilledBar = styled.View`
  width: ${props => props.progress};
  background-color: ${themeGet('colors.progressBarPrimary')};
  height: ${progressBarHeight};
`
