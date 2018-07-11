import React, { Component } from 'react'
import { ExperienceList, WideContainer } from '../../styles'
import ExperienceRow from '../../../ProfileScreen/components/ExperienceListView/ExperienceRow'
import Suitcase from 'react-native-vector-icons/Entypo'
import BlockButton from '../../../../components/BlockButton'

export default class EditExperienceBlock extends Component {
  render() {
    return (
      <WideContainer>
        <ExperienceList>
          <Suitcase name="suitcase" size={36} style={{ marginBottom: 4 }} />
          {this.props.experienceData.map(experience => (
            <ExperienceRow
              navigation={this.props.navigation}
              showEditButton
              companyName={experience.companyName}
              position={experience.position}
              startYear={experience.startYear}
              endYear={experience.endYear}
              id={experience.id}
              key={experience.id}
              addExperience={this.props.addExperience}
            />
          ))}
        </ExperienceList>
        <BlockButton
          text="ADD EXPERIENCE"
          onPress={() =>
            this.props.navigation.navigate('AddExperience', {
              addExperience: this.props.addExperience,
            })
          }
        />
      </WideContainer>
    )
  }
}