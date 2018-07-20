import React, { Component } from 'react'
import { ExperienceList, WideContainer } from '../../styles'
import ExperienceRow from '../../../ProfileScreen/components/ExperienceListView/ExperienceRow'
import Suitcase from 'react-native-vector-icons/Entypo'
import BlockButton from '../../../../components/BlockButton'

export default class EditExperienceBlock extends Component {
  // handle formatting of all experience data
  render() {
    return (
      <WideContainer>
        <ExperienceList>
          <Suitcase name="suitcase" size={36} style={{ marginBottom: 4 }} />
          {this.props.experienceData.map(experience => (
            <ExperienceRow
              navigation={this.props.navigation}
              showEditButton
              employer={experience.employer}
              position={experience.position}
              startDate={experience.startDate} // show dates instead of years
              endDate={experience.endDate}
              id={experience.id}
              key={experience.id}
              addExperience={this.props.addExperience}
              refreshData={this.props.refreshData}
            />
          ))}
        </ExperienceList>
        <BlockButton
          text="ADD EXPERIENCE"
          onPress={() =>
            this.props.navigation.navigate('AddExperience', {
              addExperience: this.props.addExperience,
              refreshData: this.props.refreshData,
            })
          }
        />
      </WideContainer>
    )
  }
}
