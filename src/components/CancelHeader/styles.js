import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  padding-top: 16px;
  padding-bottom: 13px;
  border-bottom-color: ${themeGet('colors.divider')};
  width: 100%;
  border-bottom-width: 1.5px;
`

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const CancelButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
`

export const CancelText = styled.Text`
  font-size: 18px;
  line-height: 21px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontDescription.quaternary')};
`

export const Title = styled.Text`
  align-self: center;
  font-size: 18px;
  line-height: 21px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontHeader')};
`
