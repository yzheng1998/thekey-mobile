import React, { Component } from 'react'
import { Card, Picture, Container, Title, SubTitle } from './styles'

class CompanyCard extends Component {
  static defaultProps = {
    company: {
      picture:
        'https://img.buzzfeed.com/buzzfeed-static/static/2016-11/3/5/asset/buzzfeed-prod-web03/sub-buzz-12185-1478166849-1.png?downsize=715:*&output-format=auto&output-quality=auto',
      title: 'Beats By Dre',
      location: 'Beverly Hills, California',
    },
  }

  render() {
    const { picture, title, location } = this.props.company
    return (
      <Card>
        <Picture
          source={{
            uri: picture,
          }}
        />
        <Container>
          <Title>{title}</Title>
          <SubTitle>{location}</SubTitle>
        </Container>
      </Card>
    )
  }
}

export default CompanyCard
