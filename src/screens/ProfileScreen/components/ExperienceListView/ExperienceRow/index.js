import React, { Component } from 'react'
import ProfileInfoRow from '../../../../../components/ProfileInfoRow'

export default class ExperienceRow extends Component {
  render() {
    const { companyName, position, startYear, endYear } = this.props
    return (
      <ProfileInfoRow
        navigation={this.props.navigation}
        onPress={() =>
          this.props.navigation.navigate('AddExperience', {
            addExperience: this.props.addExperience,
            formElements: this.props,
            editMode: true,
          })
        }
        showEditButton={this.props.showEditButton}
        title={companyName}
        subtitle1={position}
        startYear={startYear}
        endYear={endYear}
      />
    )
  }
}
