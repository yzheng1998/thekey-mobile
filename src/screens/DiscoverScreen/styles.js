import styled from 'styled-components'
import { themeGet } from 'styled-system'
import Modal from 'react-native-modal'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Background = styled.View`
  padding-top: 20px;
  flex: 1;
  background-color: ${themeGet('colors.buttonSecondary')};
`

export const List = styled.ScrollView`
  padding-top: 10px;
  padding-bottom: 40px;
  flex: 1;
  padding-right: 12px;
  padding-left: 12px;
`
export const Card = styled(Modal)`
  margin: 0px;
`

export const CardContainer = styled.View`
  background-color: ${themeGet('colors.background')};
  border-radius: 20px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 48px;
  padding-bottom: 36px;
`

export const Title = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 24px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
  font-family: ${themeGet('fonts.light')};
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  align-self: center;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 8px;
  margin-bottom: 12px;
`

export const Image = styled.Image`
  width: ${width * 0.64};
  height: ${width * 0.592};
  align-self: center;
`

export const NotificationImage = styled.Image`
  width: ${width * 0.64};
  height: ${width * 0.532};
  align-self: center;
  margin-right: 30px;
`

export const ButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 14px;
  line-height: 23px;
  color: ${themeGet('colors.buttonPrimary')};
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
`
