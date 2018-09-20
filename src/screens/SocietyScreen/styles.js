import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'
import Modal from 'react-native-modal'

const { width } = Dimensions.get('window')

export const Screen = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
`
export const Background = styled.ScrollView`
  background-color: ${themeGet('colors.background')};
  flex: 1;
`
export const CardContainer = styled.View`
  height: 560px;
`
export const SwiperContainer = styled.View`
  width: ${width};
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const CardButton = styled.TouchableOpacity``

export const GraphicContainer = styled.View`
  flex-direction: row;
  margin-left: 22px;
  align-self: center;
`

export const Avatar = styled.Image`
  height: 94px;
  width: 94px;
  margin-left: -22px;
  border-color: white;
  border-width: 3;
  border-radius: 47px;
`
export const Title = styled.Text`
  margin-top: 34px;
  align-self: center;
  font-size: 32px;
  line-height: 44px;
  font-family: ${themeGet('fonts.heavy')};
  color: ${themeGet('colors.fontPrimary')};
`
export const Subtitle = styled.Text`
  align-self: center;
  margin-top: 6px;
  font-size: 20px;
  line-height: 24px;
  width: 70%;
  text-align: center;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.fontPrimary')};
`
export const MatchScreen = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.backgroundTertiary')};
`

export const ModalContainer = styled(Modal)`
  margin: 0;
  flex: 1;
`
export const InfoContainer = styled.View`
  justify-content: center;
  flex: 4;
`
export const ButtonView = styled.View`
  flex: 1;
  padding-bottom: 48px;
`
