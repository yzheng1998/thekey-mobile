import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import SocietyCard from '../../components/SocietyCard'
import ReactionSymbol from '../../components/ReactionSymbol'
import { SEND_FRIEND_REQUEST } from './mutation'
import { Mutation } from 'react-apollo'

export default class CardSwiper extends Component {
  render() {
    const {
      width,
      userData,
      refetch,
      handleSwipe,
      toggleMatchModal,
      setSwipedAll,
    } = this.props
    return (
      <Mutation
        mutation={SEND_FRIEND_REQUEST}
        onCompleted={data => {
          const { friendRequest } = data.createFriendRequest
          if (friendRequest.status === 'ACCEPTED') {
            handleSwipe({
              senderFirstName: friendRequest.sender.firstName,
              senderLastName: friendRequest.sender.lastName,
              recipientProfilePicture: friendRequest.recipient.profilePicture,
              senderProfilePicture: friendRequest.sender.profilePicture,
              senderId: friendRequest.sender.id,
            })
            toggleMatchModal()
          }
        }}
      >
        {createFriendRequest => (
          <Swiper
            onSwipedAll={setSwipedAll}
            cards={userData}
            renderCard={item => {
              const renderUser = {
                ...item,
                hometown: item.demographics.hometown,
                mutualFriends: item.mutualFriends,
              }
              return (
                <SocietyCard
                  refetch={refetch}
                  user={renderUser}
                  navigation={this.props.navigation}
                />
              )
            }}
            backgroundColor="transparent"
            verticalSwipe={false}
            stackSize={3}
            cardVerticalMargin={10}
            animateCardOpacity
            inputCardOpacityRangeX={[-width, width]}
            outputCardOpacityRangeX={[1, 1]}
            overlayLabels={{
              left: {
                element: <ReactionSymbol reaction="dislike" width={88} />,
                title: 'DISLIKE',
                style: {
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                },
              },
              right: {
                element: <ReactionSymbol reaction="like" width={88} />,
                title: 'LIKE',
                style: {
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                },
              },
            }}
            animateOverlayLabelsOpacity
            inputOverlayLabelsOpacityRangeX={[-width / 4, 0, width / 4]}
            outputOverlayLabelsOpacityRangeX={[1, 0, 1]}
            overlayOpacityHorizontalThreshold={0.1}
            onSwipedLeft={i => {
              const variables = {
                recipientId: userData[i].id,
                swipedLeft: true,
              }
              createFriendRequest({ variables })
            }}
            onSwipedRight={i => {
              const variables = {
                recipientId: userData[i].id,
                swipedLeft: false,
              }
              createFriendRequest({ variables })
            }}
          />
        )}
      </Mutation>
    )
  }
}
