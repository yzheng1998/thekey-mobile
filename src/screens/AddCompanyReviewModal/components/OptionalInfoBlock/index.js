import React, { Component } from 'react'
import { OptionalHeading, InputField } from './styles'
import { Block, BlockBackground, RowHeader, Heading } from '../../styles'

const TextInputField = ({ value, placeholder, updateState }) => (
  <InputField
    placeholderTextColor="rgb(250, 53, 121)"
    placeholder={placeholder}
    value={value}
    onChangeText={text => {
      updateState(text)
    }}
  />
)

export default class OptionalInfoBlock extends Component {
  render() {
    const { state, updateState } = this.props
    return (
      <BlockBackground>
        <Block>
          <OptionalHeading>Optional Information</OptionalHeading>
          <RowHeader>
            <Heading>Job Title</Heading>
            <TextInputField
              placeholder="General Manager"
              value={state.jobTitle}
              updateState={jobTitle => updateState({ jobTitle })}
            />
          </RowHeader>
        </Block>
        <Block>
          <RowHeader>
            <Heading>Location</Heading>
            <TextInputField
              placeholder="Enter location"
              value={state.location}
              updateState={location => updateState({ location })}
            />
          </RowHeader>
        </Block>
      </BlockBackground>
    )
  }
}
