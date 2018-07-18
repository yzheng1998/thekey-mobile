import React, { Component } from 'react'
import GraduationCap from 'react-native-vector-icons/FontAwesome'
import EducationRow from './EducationRow'
import { EducationList } from './styles'

export default class EducationListView extends Component {
  render() {
    return (
      <EducationList>
        <GraduationCap
          name="graduation-cap"
          size={36}
          style={{ marginBottom: 4 }}
        />
        {this.props.educationData.map(school => (
          <EducationRow
            refreshData={this.props.refreshData}
            addEducation={this.props.addEducation}
            navigation={this.props.navigation}
            showEditButton={this.props.showEditButton}
            schoolName={school.schoolName}
            schoolType={school.schoolType}
            degreeType={school.degreeType}
            major={school.major}
            startYear={school.startYear}
            endYear={school.endYear}
            id={school.id}
            key={school.id}
          />
        ))}
      </EducationList>
    )
  }
}
