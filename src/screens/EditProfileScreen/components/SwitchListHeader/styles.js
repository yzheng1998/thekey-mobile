import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Container = styled.SafeAreaView`
  width: 100%;
  background-color: ${themeGet('colors.background')};
`
export const TitleRow = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 8px;
`
export const Title = styled.Text`
  font-family: ${themeGet('fonts.heavy')};
  font-size: 18px;
  text-align: center;
  margin-top: 3.5px;
`
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 1px;
`
export const InstructionText = styled.Text`
  color: ${themeGet('colors.fontSubtitle.primary')};
  font-family: ${themeGet('fonts.medium')};
  font-size: 16px;
  align-self: center;
  margin-bottom: 24px;
`
export const Divider = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${themeGet('colors.divider')};
`
