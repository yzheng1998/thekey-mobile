import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LargeEventCard from '../LargeEventCard'
import { Container, CardList, CardContainer } from './styles'

export default class HorizontalEventsScroll extends Component {
  static defaultProps = {
    eventsList: [{}],
  }

  static propTypes = {
    eventsList: PropTypes.arrayOf(PropTypes.object),
  }
  render() {
    const { eventsList } = this.props
    // hardcoding array of friends for now
    const friends = [
      {
        firstName: 'Yuke',
        id: 1,
        profilePicture: {
          uri:
            'https://scontent.fzty2-1.fna.fbcdn.net/v/t31.0-8/19095354_1322253334562342_5268478069300274794_o.jpg?_nc_cat=0&oh=5998f02ad58ac913850952492aaa62ba&oe=5BBDE33A',
        },
      },
      {
        firstName: 'Noah',
        id: 2,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Noah.jpg',
        },
      },
      {
        firstName: 'Humprey',
        id: 3,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/humphrey.JPG',
        },
      },
      {
        firstName: 'Ivraj',
        id: 4,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Ivraj.jpg',
        },
      },
      {
        firstName: 'Jovi',
        id: 5,
        profilePicture: {
          uri: 'https://www.dev.hsa.net/img/team/Jovin.jpg',
        },
      },
    ]
    return (
      <Container>
        <CardList
          horizontal
          keyExtractor={event => event.id}
          data={eventsList}
          renderItem={({ item }) => (
            <CardContainer>
              <LargeEventCard
                image="https://c1.staticflickr.com/2/1679/25672866665_4ccec2fd37_b.jpg"
                price={item.price}
                title={item.title}
                location={item.location}
                timeStamp="2022-04-09 01:01:02-04"
                interestedFriends={friends}
              />
            </CardContainer>
          )}
        />
      </Container>
    )
  }
}
