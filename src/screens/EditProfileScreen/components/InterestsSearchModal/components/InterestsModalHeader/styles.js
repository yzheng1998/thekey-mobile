import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Background = styled.View`
  width: 100%;
  height: 65px;
  padding: 10px;
  padding-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CancelButton = styled.TouchableOpacity``
export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
export const CancelText = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
export const Heading = styled.Text`
  font-size: 18px;
  color: ${themeGet('colors.fontHeader')};
  font-family: ${themeGet('fonts.bold')};
  position: absolute;
`
export const SafeView = styled.SafeAreaView`
  width: 100%;
`
export const DoneText = styled.Text`
  font-size: 18px;
  color: ${props =>
    props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')};
  font-family: ${themeGet('fonts.medium')};
`
