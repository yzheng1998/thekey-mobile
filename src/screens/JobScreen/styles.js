import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`

export const TagsContainer = styled.View`
  border-bottom-width: 4px;
  border-bottom-color: ${themeGet('colors.buttonSecondary')};
  background-color: white;
`
