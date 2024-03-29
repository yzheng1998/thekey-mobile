import React, { Component } from 'react'
import GraduationCap from 'react-native-vector-icons/FontAwesome'
import EducationRow from './EducationRow'
import { View } from 'react-native'
import { EducationList } from './styles'
import { Divider } from '../../styles'
import SeeAllButton from '../../../../components/SeeAllButton'

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
            u
            style={{ marginBottom: 4 }}
          />
          {this.props.educationData
            .slice(0, educationShown)
            .map(school => (
              <EducationRow
                schoolName={school.schoolName}
                schoolType={school.schoolType}
                degreeType={school.degreeType}
                major={school.major}
                startYear={school.startYear}
                endYear={school.endYear}
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
