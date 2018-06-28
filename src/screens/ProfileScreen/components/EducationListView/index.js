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
            schoolName={school.schoolName}
            degreeType={school.degreeType}
            major={school.major}
            startYear={school.startYear}
            graduationYear={school.graduationYear}
            key={school.id}
          />
        ))}
      </EducationList>
    )
  }
}
