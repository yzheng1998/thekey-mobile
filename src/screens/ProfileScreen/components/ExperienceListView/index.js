import React, { Component } from 'react'
import { View } from 'react-native'
import { ExperienceList } from './styles'

import ExperienceRow from './ExperienceRow'
import SeeAllButton from './SeeAllButton'
import Suitcase from 'react-native-vector-icons/Entypo'

export default class ExperienceListView extends Component {
  state = {
    truncated: true,
  }

  toggleSeeAll() {
    this.setState({ truncated: !this.state.truncated })
  }

  render() {
    const experiencesShown = this.state.truncated
      ? 1
      : this.props.experienceData.length
    return (
      <View style={{ width: '100%' }}>
        <ExperienceList>
          <Suitcase name="suitcase" size={36} style={{ marginBottom: 4 }} />
          {this.props.experienceData
            .slice(0, experiencesShown)
            .map(experience => (
              <ExperienceRow
                navigation={this.props.navigation}
                showEditButton={this.props.showEditButton}
                companyName={experience.companyName}
                position={experience.position}
                startYear={experience.startYear}
                endYear={experience.endYear}
                key={experience.id}
              />
            ))}
        </ExperienceList>
        <SeeAllButton
          onPress={() => this.toggleSeeAll()}
          truncated={this.state.truncated}
        />
      </View>
    )
  }
}
