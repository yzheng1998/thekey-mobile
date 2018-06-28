import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import AboutBlock from '../components/AboutBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('About Block', () => (
  <CenteredView>
    <AboutBlock
      about="The Inbound General Manager manages and leads a team to ensure that
            customer services meet client needs as well as the standards of a
            national service delivery model. The Inbound General Manager manages
            and leads a team to ensure that customer services meet client needs
            as well as the standards of a national service delivery model."
    />
  </CenteredView>
))
