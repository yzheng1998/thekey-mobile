import React, { Component } from 'react'
import ProfileInfoRow from '../../../../../components/ProfileInfoRow'

export default class ExperienceRow extends Component {
  render() {
    const { employer, position, startDate, endDate } = this.props
    return (
      <ProfileInfoRow
        navigation={this.props.navigation}
        onPress={() =>
          this.props.navigation.navigate('AddExperience', {
            addExperience: this.props.addExperience,
            formElements: this.props,
            editMode: true,
            refreshData: this.props.refreshData,
          })
        }
        showEditButton={this.props.showEditButton}
        title={employer}
        subtitle1={position}
        startYear={startDate}
        endYear={endDate}
      />
    )
  }
}
