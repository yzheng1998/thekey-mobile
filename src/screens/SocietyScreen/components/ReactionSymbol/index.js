import React, { Component } from 'react'

import { SymbolContainer, ReactionImage } from './styles'

const checkmark = require('../../assets/tick.png')
const xmark = require('../../assets/close.png')

export default class ReactionSymbol extends Component {
  render() {
    const likeReaction = this.props.reaction === 'like'
    const symbol = likeReaction ? checkmark : xmark
    return (
      <SymbolContainer reaction={likeReaction} width={this.props.width}>
        <ReactionImage source={symbol} />
      </SymbolContainer>
    )
  }
}
