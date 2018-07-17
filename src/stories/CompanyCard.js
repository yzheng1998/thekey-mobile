import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import CompanyCard from '../components/CompanyCard'
import Beats from './beats3.jpg'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('CenteredView')
  .add('CompanyCard1', () => (
    <CenteredView>
      <CompanyCard
        picture={Beats}
        title="Beats By Dre"
        reviews="300"
        rating={4.4}
      />
    </CenteredView>
  ))
  .add('CompanyCard2', () => (
    <CenteredView>
      <CompanyCard
        picture={Beats}
        title="Beats By Dre"
        reviews="300"
        rating="2.7"
      />
    </CenteredView>
  ))
