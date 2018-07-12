import React, { Component } from 'react'
import { ContactContent, Contact } from '../styles'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class GeneralContact extends Component {
  render() {
    return (
      <Contact>
        <Icon name={this.props.iconName} size={23} />
        <ContactContent>{this.props.contactContent}</ContactContent>
      </Contact>
    )
  }
}
