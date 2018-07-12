import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'
import ReviewPictureBlock from '../screens/ReviewScreen/components/ReviewPictureBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('ReviewPictureBlock', () => (
  <CenteredView>
    <ReviewPictureBlock
      picture={{
        uri:
          'https://cdn.zeplin.io/5b18b9740bc6b2af45546408/assets/6FE3D570-0BE7-40CA-923D-A045ECA2830D.png',
      }}
      title="Beats By Dre"
      rating={4.4}
      reviews={352}
    />
  </CenteredView>
))
