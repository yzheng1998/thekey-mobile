import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import ContactContainerView from '../screens/ProfileScreen/components/ContactContainerView'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

const contact = {
  linkedIn: 'Linkedin.com/name',
  twitter: '@username',
  facebook: 'facebook.com/name',
  email: 'person@email.com',
}

storiesOf('CenteredView').add('ContactContainerView', () => (
  <CenteredView>
    <ContactContainerView
      linkedIn={contact.linkedIn}
      email={contact.email}
      facebook={contact.facebook}
      twitter={contact.twitter}
    />
  </CenteredView>
))
