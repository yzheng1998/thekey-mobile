import React, { Component } from 'react'
import { HelpText, ReviewInputField } from './styles'
import { BlockBackground, Block, Heading, RowHeader } from '../../styles'

const Header = ({ heading, helpText }) => (
  <RowHeader>
    <Heading>{heading}</Heading>
    <HelpText>{helpText}</HelpText>
  </RowHeader>
)
export default class DescriptionBlock extends Component {
  render() {
    const { onChangeText, reviewTitle, reviewPros, reviewCons } = this.props
    return (
      <BlockBackground>
        <Block>
          <Heading>Review Title</Heading>
          <ReviewInputField
            multiline
            placeholder="Describe your experience there in one sentence, i.e. &quot;Great workplace, great people&quot;"
            onChangeText={text => onChangeText({ reviewTitle: text })}
            value={reviewTitle}
          />
        </Block>
        <Block>
          <Header heading="Pros" helpText="Minimum 10 words" />
          <ReviewInputField
            multiline
            placeholder="What are the top reasons to work here?"
            onChangeText={text => onChangeText({ reviewPros: text })}
            value={reviewPros}
          />
        </Block>
        <Block>
          <Header heading="Cons" helpText="Minimum 10 words" />
          <ReviewInputField
            multiline
            placeholder="What are the downsides of working here?"
            onChangeText={text => onChangeText({ reviewCons: text })}
            value={reviewCons}
          />
        </Block>
      </BlockBackground>
    )
  }
}
