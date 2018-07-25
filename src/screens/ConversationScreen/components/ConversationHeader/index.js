import React, { Component } from 'react'
import {
  SafeView,
  BackButton,
  HeaderContainer,
  Title,
  TitleContainer,
  TruncateTitle,
  AvatarContainer,
  Avatar,
  AvatarRowContainer,
} from './styles'
import BackArrow from 'react-native-vector-icons/Ionicons'
import AvatarRow from '../../../MemberScreen/components/MutualFriends'
import { TouchableOpacity } from 'react-native'

const getConversationTitle = (participants, userId) => {
  const otherParticipants = participants.filter(p => p.id !== userId)
  if (otherParticipants.length > 1) {
    const allParticipantsExceptLast = otherParticipants.slice(
      0,
      otherParticipants.length - 1,
    )
    return `${allParticipantsExceptLast.map(p => p.firstName).join(', ')} & ${
      otherParticipants[otherParticipants.length - 1].firstName
    }`
  }
  // otherwise, talking to only one person
  return `${otherParticipants[0].firstName} ${otherParticipants[0].lastName}`
}

const ConversationTitle = ({ participants, userId }) => (
  <Title numberOfLines={1}>{getConversationTitle(participants, userId)}</Title>
)

const ParticipantPictures = ({ otherParticipants, numberOfPics, navigation }) =>
  otherParticipants.length > 1 ? (
    <AvatarRowContainer>
      <AvatarRow
        mutualFriends={otherParticipants}
        avatarSize={26}
        numberOfPics={numberOfPics}
        navigation={navigation}
      />
    </AvatarRowContainer>
  ) : (
    <AvatarContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Member', {
            id: otherParticipants[0].id,
          })
        }}
      >
        <Avatar
          source={{
            uri: otherParticipants[0].profilePicture,
          }}
        />
      </TouchableOpacity>
    </AvatarContainer>
  )

export default class ConversationHeader extends Component {
  render() {
    const { navigation, participants, userId } = this.props

    return (
      <SafeView>
        <TitleContainer>
          <TruncateTitle>
            <ConversationTitle participants={participants} userId={userId} />
          </TruncateTitle>
          <HeaderContainer>
            <BackButton onPress={() => navigation.goBack()}>
              <BackArrow name="ios-arrow-back" color="rgb(3,3,3)" size={26} />
            </BackButton>
            <ParticipantPictures
              otherParticipants={participants.filter(p => p.id !== userId)}
              numberOfPics={2}
              navigation={navigation}
            />
          </HeaderContainer>
        </TitleContainer>
      </SafeView>
    )
  }
}
