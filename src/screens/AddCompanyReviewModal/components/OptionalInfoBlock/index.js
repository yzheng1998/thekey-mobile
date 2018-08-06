import React, { Component } from 'react'
import { OptionalHeading, InputField } from './styles'
import { Block, BlockBackground, RowHeader, Heading, Text } from '../../styles'
import { TouchableOpacity } from 'react-native'

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
    const { state, updateState, toggleLocationModal } = this.props
    return (
      <BlockBackground>
        <Block>
          <OptionalHeading>Optional Information</OptionalHeading>
          <RowHeader>
            <Heading>Job Title</Heading>
            <TextInputField
              onFocus={toggleLocationModal}
              onBlur={toggleLocationModal}
              placeholder="General Manager"
              value={state.jobTitle}
              updateState={jobTitle => updateState({ jobTitle })}
            />
          </RowHeader>
        </Block>
        <Block>
          <RowHeader>
            <Heading>Location</Heading>
            <TouchableOpacity onPress={toggleLocationModal}>
              <Text>
                {state.location === '' ? 'Enter Location' : state.location}
              </Text>
            </TouchableOpacity>
          </RowHeader>
        </Block>
      </BlockBackground>
    )
  }
}
