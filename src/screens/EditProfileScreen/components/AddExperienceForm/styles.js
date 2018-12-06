import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const RowContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
export const SwitchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  margin-bottom: 14px;
  margin-top: -4px;
`
export const AddButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: white;
  font-size: 14px;
`
export const RemoveButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  color: ${themeGet('colors.buttonPrimary')};
  font-size: 14px;
`
export const AddButton = styled.TouchableOpacity`
  height: 50px;
  background-color: ${props =>
    props.disabled
      ? themeGet('colors.buttonClicked')
      : themeGet('colors.buttonPrimary')};
  margin-top: 12px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
export const RemoveButton = styled.TouchableOpacity`
  background-color: white;
  margin-top: 24px;
  border-radius: 10px;
  align-items: center;
  padding: 16px;
  margin-left: 12px;
  margin-right: 12px;
`
export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: column;
`
export const SwitchLabel = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  margin-left: 12px;
`
