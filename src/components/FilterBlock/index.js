import React, { Component } from 'react'
import { Container, Title, TabContainer } from './styles'
import SearchFilterTab from '../SearchFilterTab'

class FilterBlock extends Component {
  static defaultProps = {}
  render() {
    return (
      <Container>
        <Title>Showing</Title>
        <TabContainer>
          <SearchFilterTab
            options={['All', 'Full-time', 'Part-time', 'Internship']}
            selectedColor="rgb(250,53,121)"
            color="rgb(148,157,170)"
          />
        </TabContainer>
      </Container>
    )
  }
}

export default FilterBlock
