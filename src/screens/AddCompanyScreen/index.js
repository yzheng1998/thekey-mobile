import React, { Component } from 'react'
import { View } from 'react-native'
import {} from './styles'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import CompanyList from './components/CompanyList'

const company = {
  picture:
    'https://img.buzzfeed.com/buzzfeed-static/static/2016-11/3/5/asset/buzzfeed-prod-web03/sub-buzz-12185-1478166849-1.png?downsize=715:*&output-format=auto&output-quality=auto',
  title: 'Beats By Dre',
  location: 'Beverly Hills, California',
}

const companies = [company, company, company]

export default class AddCompanyScreen extends Component {
  render() {
    return (
      <View>
        <Header />
        <SearchInput />
        <CompanyList companies={companies} />
      </View>
    )
  }
}
