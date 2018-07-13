import React, { Component } from 'react'
import CompanyCard from '../CompanyCard'
import { FlatList } from 'react-native'

class CompanyList extends Component {
  render() {
    const { companies } = this.props
    return (
      <FlatList
        keyExtractor={item => item.id}
        data={companies}
        renderItem={({ item }) => <CompanyCard company={item} />}
      />
    )
  }
}
export default CompanyList
