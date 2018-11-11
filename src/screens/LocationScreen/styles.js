import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const Screen = styled.View`
  flex: 1;
  background-color: ${themeGet('colors.background')};
  padding-left: 12px;
  padding-right: 12px;
`

export const Title = styled.Text`
  margin-top: 40px;
  margin-bottom: 12px;
  align-self: center;
  font-size: 24px;
  font-family: ${themeGet('fonts.bold')};
  line-height: 30px;
  color: ${themeGet('colors.fontHeader')};
`

export const imageStyle = {
  alignSelf: 'center',
  marginTop: 100,
  height: height * 0.3,
  width: width * 0.55,
}

export const subtitleStyle = {
  textAlign: 'center',
  marginLeft: 18,
  marginRight: 18,
  marginBottom: 24,
  fontSize: 18,
  lineHeight: 24,
}
