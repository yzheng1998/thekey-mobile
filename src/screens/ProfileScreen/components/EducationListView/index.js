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
          u
          style={{ marginBottom: 4 }}
        />
        {this.props.educationData.map(school => (
          <EducationRow
            addEducation={this.props.addEducation}
            navigation={this.props.navigation}
            showEditButton={this.props.showEditButton}
            schoolName={school.schoolName}
            schoolType={school.schoolType
              .toLowerCase()
              .replace(/^\w/, c => c.toUpperCase())}
            degreeType={school.degreeType}
            major={school.major}
            startYear={school.startYear}
            graduationYear={school.graduationYear}
            id={school.id}
            key={school.id}
          />
        ))}
      </EducationList>
    )
  }
}
