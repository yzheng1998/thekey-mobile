import React, { Component } from 'react'
import {
  DescriptionContainer,
  Title,
  Location,
  Date,
  Container,
} from './styles'
import PictureHeader from '../../../../components/PictureHeader'
import InterestedFriendsRow from '../../../../screens/EventsScreen/components/InterestedFriendsRow'
import LocationIcon from 'react-native-vector-icons/SimpleLineIcons'
import ClockIcon from 'react-native-vector-icons/Feather'

class EventPictureBlock extends Component {
  render() {
    const {
      picture,
      title,
      location,
      date,
      friends,
      connectionsNum,
    } = this.props
    return (
      <PictureHeader picture={picture} avatarSize={123}>
        <Title />
        <DescriptionContainer>
          <Title>{title}</Title>
          <Container>
            <LocationIcon
              style={{ marginTop: 3 }}
              name="location-pin"
              size={13}
              color="white"
            />
            <Location>{location}</Location>
          </Container>
          <Container>
            <ClockIcon name="clock" size={13} color="white" />
            <Date>{date}</Date>
          </Container>
          {connectionsNum > 0 && (
            <InterestedFriendsRow
              navigate={interestedFriends =>
                this.props.navigation.navigate('PeopleList', {
                  people: interestedFriends,
                  title: 'Interested Friends',
                })
              }
              connectionsNum={connectionsNum}
              interestedFriends={friends}
              avatarSize={26}
            />
          )}
        </DescriptionContainer>
      </PictureHeader>
    )
  }
}

export default EventPictureBlock
