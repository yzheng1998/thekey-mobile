import styled from 'styled-components'
import { themeGet } from 'styled-system'

export const Name = styled.Text`
  font-size: 12px;
  font-family: ${themeGet('fonts.bold')};
  color: ${themeGet('colors.messageBubbleOtherUser')};
`
export const InstructionText = styled.Text`
  font-size: 14px;
  font-family: ${themeGet('fonts.medium')};
  margin-top: 4px;
  color: ${themeGet('colors.fontDescription.primary')};
`
export const InstructionContainer = styled.View`
  width: 100%;
  height: 50;
  align-items: center;
  justify-content: center;
`
export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 3px;
`
export const GroupMessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const WideMessageContainer = styled.View`
  padding-left: 30px;
`
export const Screen = styled.View`
  flex: 1;
  padding-top: 5px;
  padding-left: 16px;
  padding-right: 16px;
`
