import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const ScreenContainer = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${themeGet('colors.background')};
  padding-bottom: 24px;
`

export const ContentContainer = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  margin-bottom: 70px;
`

export const Button = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 8px;
  height: 50px;
  margin-left: 12px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.clicked
      ? themeGet('colors.activeTag')
      : themeGet('colors.textAreaBorder')};
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 16px;
  color: white;
`
export const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`
