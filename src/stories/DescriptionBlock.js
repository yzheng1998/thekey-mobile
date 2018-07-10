import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import DescriptionBlock from '../screens/AddCompanyReviewScreen/components/DescriptionBlock'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  padding: 15,
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView').add('DescriptionBlock for AddReview', () => (
  <CenteredView>
    <DescriptionBlock />
  </CenteredView>
))
