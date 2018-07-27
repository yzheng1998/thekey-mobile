import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const AddReviewButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${themeGet('colors.buttonPrimary')};
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10;
  right: 10;
  box-shadow: 0px 9px 8px rgba(142, 142, 142, 0.9);
  elevation: 2;
`

export const Divider = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${themeGet('colors.divider')};
`
