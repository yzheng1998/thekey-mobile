import React, { Component } from 'react'
import EducationListView from '../../../ProfileScreen/components/EducationListView'
import BlockButton from '../../../../components/BlockButton'
import { WideContainer } from '../../styles'

export default class EditEducationBlock extends Component {
  render() {
    return (
      <WideContainer>
        <EducationListView educationData={this.props.educationData} />
        <BlockButton text="ADD EDUCATION" />
      </WideContainer>
    )
  }
}
