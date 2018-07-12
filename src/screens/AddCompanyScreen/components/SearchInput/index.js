import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Divider, DividerText } from './styles'

class SearchInput extends Component {
  render() {
    return (
      <View>
        <Container placeholder="Search for a company" />
        <Divider>
          <DividerText>POPULAR COMPANIES</DividerText>
        </Divider>
      </View>
    )
  }
}

export default SearchInput
