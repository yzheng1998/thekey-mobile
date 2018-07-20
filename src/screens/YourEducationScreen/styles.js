import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${themeGet('colors.background')};
`

export const Instructions = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-size: 16px;
  font-family: ${themeGet('fonts.medium')};
  text-align: center;
`

export const InstructionsContainer = styled.View`
  margin-bottom: 12px;
`

export const EducationItemContainer = styled.View`
  width: 100%;
  height: 68px;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
`

export const EducationBody = styled.View`
  flex-direction: column;
  margin-left: 10px;
  width: ${width * 0.672};
`

export const InfoContainer = styled.View`
  margin-left: 16px;
`
export const SchoolName = styled.Text`
  font-family: ${themeGet('fonts.bold')};
  font-size: 16px;
`

export const Location = styled.Text`
  font-family: ${themeGet('fonts.semiBold')};
  color: ${themeGet('colors.fontDescription.quaternary')};
  font-size: 12px;
`

export const ClearIconButton = styled.TouchableOpacity`
  margin-right: 8px;
  margin-left: 8px;
`
