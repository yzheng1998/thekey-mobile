import { ButtonGroup } from 'react-native-elements'
import React, { Component } from 'react'

export default class TemplateSelector extends Component {
  render() {
    return (
      <ButtonGroup
        onPress={this.props.onPress}
        selectedIndex={this.props.selectedIndex}
        containerStyle={{
          height: 29,
          width: '100%',
          borderColor: 'rgb(250,53,121)',
          backgroundColor: 'white',
        }}
        buttons={['Use Template', 'Create New']}
        innerBorderStyle={{ color: 'rgb(250,53,121)' }}
        selectedButtonStyle={{
          backgroundColor: 'rgb(250,53,121)',
        }}
        selectedTextStyle={{ color: 'white' }}
        textStyle={{ color: 'rgb(250,53,121)' }}
      />
    )
  }
}
