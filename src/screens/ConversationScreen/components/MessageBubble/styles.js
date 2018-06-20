import styled from 'styled-components'
import { themeGet } from 'styled-system'

const currentUserColor = themeGet('colors.messageBubbleCurrentUser')
const otherUserColor = themeGet('colors.messageBubbleOtherUser')

export const MessageContainer = styled.View`
  max-width: 60%;
  padding: 5px;
  border-top-left-radius: ${props =>
    props.tailPosition === 'upperLeft' ? 5 : 25};
  border-top-right-radius: ${props =>
    props.tailPosition === 'upperRight' ? 5 : 25};
  border-bottom-left-radius: ${props =>
    props.tailPosition === 'lowerLeft' ? 5 : 25};
  border-bottom-right-radius: ${props =>
    props.tailPosition === 'lowerRight' ? 5 : 25};
  overflow: hidden;
  background-color: ${props =>
    props.isUser ? currentUserColor : otherUserColor};
  flex-direction: row;
  padding: 10px;
  padding-left: 15px;
  padding-right: 14px;
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  margin: 3px;
`
export const MessageText = styled.Text`
  font-size: 17px;
  font-family: ${themeGet('fonts.medium')};
  color: ${themeGet('colors.messageBubbleText')};
`
