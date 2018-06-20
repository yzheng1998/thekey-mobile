import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import MessageBubble from '../screens/ConversationScreen/components/MessageBubble'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView')
  .add('Message Bubble 1', () => (
    <CenteredView>
      <MessageBubble isUser message="Short and sweet" messageStyle="none" />
      <MessageBubble
        isUser
        message="LOWER RIGHT Short and sweet2"
        messageStyle="lowerRight"
      />
      <MessageBubble
        isUser={false}
        message="LOWER LEFT the seemingly artless perfection of a dish of spring-green peas"
        messageStyle="lowerLeft"
      />
      <MessageBubble
        isUser
        message="UPPER RIGHT With over 100 instructive illustrations to guide readers every step of the way, Mastering the Art of French Cooking deserves a place of honor in every kitchen in America."
        messageStyle="upperRight"
      />
    </CenteredView>
  ))
  .add('Message Bubble 2', () => (
    <CenteredView>
      <MessageBubble
        isUser={false}
        message="LOWER LEFT For over fifty years, New York Times bestseller Mastering the Art of French Cooking has been the definitive book on the subject for American readers."
        messageStyle="lowerLeft"
      />
      <MessageBubble
        isUser={false}
        message="UPPER LEFT Featuring 524 delicious recipes, in its pages home cooks will find something for everyone "
        messageStyle="upperLeft"
      />
      <MessageBubble
        isUser
        message="NONE from seasoned experts to beginners who love good food and long to reproduce the savory delights of French cuisine"
        messageStyle="none"
      />
      <MessageBubble
        isUser
        message="LOWER RIGHT from historic Gallic masterpieces"
        messageStyle="lowerRight"
      />
    </CenteredView>
  ))
