import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import Description from '../screens/ProfileScreen/components/Description'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView')
  .add('Description1', () => (
    <CenteredView>
      <Description
        row={false}
        title="Good Qualities"
        content="I am a happy boy"
      />
    </CenteredView>
  ))
  .add('Description2', () => (
    <CenteredView>
      <Description row title="Looking For" content="Happiness" />
    </CenteredView>
  ))
