import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`
export const BackButtonContainer = styled.TouchableOpacity``

export const ButtonHeader = styled.View`
  position: absolute;
  top: 35px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const TagsContainer = styled.View`
  border-bottom-width: 4px;
  border-bottom-color: ${themeGet('colors.buttonSecondary')};
  background-color: white;
`
