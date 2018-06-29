import React, { Component } from 'react'
import { ContactContent, Contact } from '../../../styles'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class GeneralContactInput extends Component {
  render() {
    const { iconName, value, placeholder, onChangeText } = this.props
    return (
      <Contact>
        <Icon name={iconName} size={23} />
        <ContactContent
          defaultValue={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </Contact>
    )
  }
}
