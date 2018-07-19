import React, { Component } from 'react'
import { View } from 'react-native'
import EducationItem from '../EducationItem'

export default class EducationList extends Component {
  render() {
    const { educationListData, cancel } = this.props
    return (
      <View>
        {educationListData.map(item => (
          <EducationItem
            cancel={cancel}
            key={item.id}
            id={item.id}
            item={item}
          />
        ))}
      </View>
    )
  }
}
