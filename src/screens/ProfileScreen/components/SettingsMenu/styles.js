import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 50px;
`
export const Menu = styled.View`
  width: 100%;
  overflow: hidden;
  background-color: ${themeGet('colors.backgroundSecondary')};
  border-radius: 20px;
`
export const MenuItemList = styled.ScrollView`
  width: 100%;
`
export const EmailAddress = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px;
  letter-spacing: -0.1;
  color: ${themeGet('colors.fontProfileFields')};
`
export const CancelMembershipButton = styled.TouchableOpacity`
  width: 91%;
  height: 45px;
  background-color: ${themeGet('colors.buttonPrimary')};
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 80px;
  align-self: center;
  align-items: center;
  justify-content: center;
`
export const ButtonText = styled.Text`
font-size: 14px;
font-family: ${themeGet('fonts.bold')}
color: ${themeGet('colors.fontButtonPrimary')}
`
