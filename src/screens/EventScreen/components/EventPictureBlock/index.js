import React, { Component } from 'react'
import {
  HeaderContainer,
  DescriptionContainer,
  Title,
  Location,
  Date,
  Container,
  LocationContainer,
  ClockContainer,
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
      <HeaderContainer>
        <PictureHeader source={picture} avatarSize={123}>
          <DescriptionContainer>
            <Title>{title}</Title>
            <Container>
              <LocationContainer>
                <LocationIcon name="location-pin" size={13} color="white" />
              </LocationContainer>
              <Location>{location}</Location>
            </Container>
            <Container>
              <ClockContainer>
                <ClockIcon name="clock" size={13} color="white" />
              </ClockContainer>
              <Date>{date}</Date>
            </Container>
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
          </DescriptionContainer>
        </PictureHeader>
      </HeaderContainer>
    )
  }
}

export default EventPictureBlock
