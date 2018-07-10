import React, { Component } from 'react'
import {
  Background,
  Block,
  Heading,
  InputField,
  HelpText,
  RowHeader,
} from './styles'

export default class DescriptionBlock extends Component {
  render() {
    return (
      <Background>
        <Block>
          <Heading>Review Title</Heading>
          <InputField
            multiline
            placeholder="Describe your experience there in one sentence, i.e. &quot;Great workplace, great people&quot;"
          />
        </Block>
        <Block>
          <RowHeader>
            <Heading>Pros</Heading>
            <HelpText>Minimum 10 words</HelpText>
          </RowHeader>
          <InputField
            multiline
            placeholder="What are the top reasons to work here?"
          />
        </Block>
        <Block>
          <RowHeader>
            <Heading>Cons</Heading>
            <HelpText>Minimum 10 words</HelpText>
          </RowHeader>
          <InputField
            multiline
            placeholder="What are the downsides of working here?"
          />
        </Block>
      </Background>
    )
  }
}
