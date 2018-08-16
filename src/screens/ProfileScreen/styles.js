import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScreenContainer = styled.ScrollView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const Divider = styled.View`
  width: 100%;
  height: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${themeGet('colors.divider')};
`
export const Container = styled.View`
  width: 100%;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: space-between;
  margin-top: 5;
  margin-bottom: 5;
  padding-left: 16;
  padding-right: 16;
`
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${themeGet('fonts.bold')};
  line-height: 23px;
  color: ${themeGet('colors.profileTitle')};
  margin-top: 3;
  margin-bottom: 3;
`

export const SettingsContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 50px;
`
export const Menu = styled.View`
  width: 100%;
  flex: 1;
  overflow: hidden;
  background-color: ${themeGet('colors.backgroundSecondary')};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`
export const MenuItemList = styled.ScrollView`
  width: 100%;
  height: 100%;
`
export const EmailAddress = styled.Text`
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px;
  letter-spacing: -0.1;
  color: ${themeGet('colors.fontProfileFields')};
`
export const CancelMembershipButton = styled.TouchableOpacity`
  margin-left: 16px;
  margin-right: 16px;
  height: 45px;
  background-color: ${themeGet('colors.buttonTertiary')};
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
`
export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.fontButtonPrimary')};
`

export const Screen = styled.View`
  flex: 1;
`
export const ModalScreenContainer = styled.View`
  width: 100%;
  padding-top: 12px;
  flex: 1;
  background-color: ${themeGet('colors.background')};
`

export const SubtitleView = styled.View`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
`

export const Subtitle = styled.Text`
  color: ${props =>
    props.hyperlink
      ? themeGet('colors.fontButtonTertiary')
      : themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
  font-size: 14px
  line-height: 20px;
  text-align: center;
`
