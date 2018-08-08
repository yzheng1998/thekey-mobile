import React, { Component } from 'react'
import { OptionalHeading, InputField, LocationText } from './styles'
import { Block, BlockBackground, RowHeader, Heading } from '../../styles'
import { TouchableOpacity } from 'react-native'

export default class OptionalInfoBlock extends Component {
  render() {
    const { state, updateJobTitle, toggleLocationModal } = this.props
    return (
      <BlockBackground>
        <Block>
          <OptionalHeading>Optional Information</OptionalHeading>
          <RowHeader>
            <Heading>Job Title</Heading>
            <InputField
              placeholderTextColor="rgb(176, 186, 200)"
              placeholder="General Manager"
              value={state.jobTitle.text}
              onChangeText={updateJobTitle}
            />
          </RowHeader>
        </Block>
        <Block>
          <RowHeader>
            <Heading>Location</Heading>
            <TouchableOpacity onPress={toggleLocationModal}>
              <LocationText>
                {state.location === '' ? 'Enter Location' : state.location}
              </LocationText>
            </TouchableOpacity>
          </RowHeader>
        </Block>
      </BlockBackground>
    )
  }
}
