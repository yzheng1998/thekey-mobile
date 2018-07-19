import styled from 'styled-components'
import { themeGet } from 'styled-system'

const progressBarHeight = '4px'

export const EmptyBar = styled.View`
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${themeGet('colors.progressBarEmpty')};
  height: ${progressBarHeight};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
`
export const FilledBar = styled.View`
  width: ${props => props.progress};
  background-color: ${themeGet('colors.progressBarPrimary')};
  height: ${progressBarHeight};
`
