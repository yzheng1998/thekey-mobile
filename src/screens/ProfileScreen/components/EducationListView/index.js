import React, { Component } from 'react'
import GraduationCap from 'react-native-vector-icons/FontAwesome'
import EducationRow from './EducationRow'
import { EducationList } from './styles'
import { View } from 'react-native'
import SeeAllButton from '../../../../components/SeeAllButton'
import { Divider } from '../../styles'

export default class EducationListView extends Component {
  state = {
    truncated: true,
  }

  toggleSeeAll() {
    this.setState({ truncated: !this.state.truncated })
  }

  render() {
    const educationShown = this.state.truncated
      ? 2
      : this.props.educationData.length
    return (
      <View style={{ width: '100%' }}>
        <EducationList>
          <GraduationCap
            name="graduation-cap"
            size={36}
            style={{ marginBottom: 4 }}
          />
          {this.props.educationData
            .slice(0, educationShown)
            .map(school => (
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
        {this.props.educationData.length > 2 ? (
          <SeeAllButton
            onPress={() => this.toggleSeeAll()}
            truncated={this.state.truncated}
          />
        ) : (
          <Divider />
        )}
      </View>
    )
  }
}
