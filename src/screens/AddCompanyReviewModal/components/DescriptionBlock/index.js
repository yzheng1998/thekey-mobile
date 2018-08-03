import React, { Component } from 'react'
import { HelpText, ReviewInputField } from './styles'
import { BlockBackground, Block, Heading, RowHeader } from '../../styles'
import Error from '../../../../components/Error'

const Header = ({ heading, helpText }) => (
  <RowHeader>
    <Heading>{heading}</Heading>
    <HelpText>{helpText}</HelpText>
  </RowHeader>
)
export default class DescriptionBlock extends Component {
  render() {
    const { state, updateState, validateForm, addTouched } = this.props
    return (
      <BlockBackground>
        <Block>
          <Heading>Review Title</Heading>
          <ReviewInputField
            multiline
            onFocus={() => addTouched('reviewTitle')}
            onBlur={() => validateForm(false)}
            placeholder="&quot;Great workplace, great people&quot;"
            onChangeText={reviewTitle => {
              updateState(
                {
                  reviewTitle,
                },
                () => validateForm(true),
              )
            }}
            value={state.reviewTitle}
          />
          <Error error={state.displayErrors.reviewTitle} />
        </Block>
        <Block>
          <Header heading="Pros" helpText="Minimum 10 words" />
          <ReviewInputField
            onFocus={() => addTouched('reviewPros')}
            onBlur={() => validateForm(false)}
            multiline
            placeholder="What are the top reasons to work here?"
            onChangeText={reviewPros => {
              updateState(
                {
                  reviewPros,
                },
                () => validateForm(true),
              )
            }}
            value={state.reviewPros}
          />
          <Error error={state.displayErrors.reviewPros} />
        </Block>
        <Block>
          <Header heading="Cons" helpText="Minimum 10 words" />
          <ReviewInputField
            onFocus={() => addTouched('reviewCons')}
            onBlur={() => validateForm(false)}
            multiline
            placeholder="What are the downsides of working here?"
            onChangeText={reviewCons => {
              updateState(
                {
                  reviewCons,
                },
                () => validateForm(true),
              )
            }}
            value={state.reviewCons}
          />
          <Error error={state.displayErrors.reviewCons} />
        </Block>
      </BlockBackground>
    )
  }
}
