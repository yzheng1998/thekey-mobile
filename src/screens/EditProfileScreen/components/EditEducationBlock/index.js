import React, { Component } from 'react'
import EducationListView from '../../../ProfileScreen/components/EducationListView'
import BlockButton from '../../../../components/BlockButton'
import { WideContainer } from '../../styles'

export default class EditEducationBlock extends Component {
  render() {
    return (
      <WideContainer>
        <EducationListView
          showEditButton
          addEducation={this.props.addEducation}
          navigation={this.props.navigation}
          educationData={this.props.educationData}
          refreshData={this.props.refreshData}
        />
        <BlockButton
          text="ADD EDUCATION"
          onPress={() =>
            this.props.navigation.navigate('AddEducation', {
              addEducation: this.props.addEducation,
              refreshData: this.props.refreshData,
            })
          }
        />
      </WideContainer>
    )
  }
}
