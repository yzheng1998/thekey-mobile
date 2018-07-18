import React, { Component } from 'react'
import ProfileInfoRow from '../../../../../components/ProfileInfoRow'

export default class EducationRow extends Component {
  render() {
    const { schoolName, degreeType, major, startYear, endYear } = this.props
<<<<<<< HEAD
=======
    console.log('props', this.props)
>>>>>>> 7a0983a... fix up prop naming issues in Profile Screen
    return (
      <ProfileInfoRow
        education
        showEditButton={this.props.showEditButton}
        onPress={() =>
          this.props.navigation.navigate('AddEducation', {
            addEducation: this.props.addEducation,
            formElements: this.props,
            editMode: true,
            refreshData: this.props.refreshData,
          })
        }
        navigation={this.props.navigation}
        title={schoolName}
        subtitle1={degreeType}
        subtitle2={major}
        startYear={startYear}
        endYear={endYear}
      />
    )
  }
}
