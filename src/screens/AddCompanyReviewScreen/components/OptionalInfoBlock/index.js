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
    const { jobTitle, updateJobTitle, location, updateLocation } = this.props
    return (
      <BlockBackground>
        <Block>
          <OptionalHeading>Optional Information</OptionalHeading>
          <RowHeader>
            <Heading>Job Title</Heading>
            <TextInputField
              placeholder={jobTitle}
              value={jobTitle}
              updateState={updateJobTitle}
            />
          </RowHeader>
        </Block>
        <Block>
          <RowHeader>
            <Heading>Location</Heading>
            <TextInputField
              placeholder={location}
              value={location}
              updateState={updateLocation}
            />
          </RowHeader>
        </Block>
      </BlockBackground>
    )
  }
}
