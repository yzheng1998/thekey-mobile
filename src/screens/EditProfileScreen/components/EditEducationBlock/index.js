import React, { Component } from 'react'
import EducationRow from '../../../ProfileScreen/components/EducationListView/EducationRow'
import BlockButton from '../../../../components/BlockButton'
import { WideContainer, ExperienceList } from '../../styles'
import GraduationCap from 'react-native-vector-icons/FontAwesome'

export default class EditEducationBlock extends Component {
  render() {
    return (
      <WideContainer>
        <ExperienceList>
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
              showEditButton
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
        </ExperienceList>
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
