import React, { Component } from 'react'
import MainHeader from '../../../../components/MainHeader'
import { SearchButton } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import SocietyBackground from '../../../../../assets/SocietyBackground.png'

export default class SocietyHeader extends Component {
  render() {
    return (
      <MainHeader
        navigation={this.props.navigation}
        backgroundImage={SocietyBackground}
        title={this.props.title || 'The Society'}
        ButtonChildren={
          this.props.openModal && (
            <SearchButton onPress={this.props.openModal}>
              <Icon name="md-search" color="white" size={25} />
            </SearchButton>
          )
        }
      />
    )
  }
}
