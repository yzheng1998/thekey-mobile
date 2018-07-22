import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import SocietyCard from '../../components/SocietyCard'
import ReactionSymbol from '../../components/ReactionSymbol'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const SEND_FRIEND_REQUEST = gql`
  mutation createFriendRequest($recipientId: ID!, $swipedLeft: Boolean!) {
    createFriendRequest(recipientId: $recipientId, swipedLeft: $swipedLeft) {
      error {
        message
      }
    }
  }
`

export default class CardSwiper extends Component {
  render() {
    const { width, userData } = this.props
    return (
      <Mutation mutation={SEND_FRIEND_REQUEST}>
        {createFriendRequest => (
          <Swiper
            cards={userData.users}
            renderCard={item => {
              const renderUser = {
                ...item,
                hometown: item.demographics.hometown,
                mutualFriends: item.friends,
              }
              return (
                <SocietyCard
                  user={renderUser}
                  navigation={this.props.navigation}
                />
              )
            }}
            backgroundColor="white"
            verticalSwipe={false}
            stackSize={3}
            cardVerticalMargin={10}
            animateCardOpacity
            inputCardOpacityRangeX={[-width / 2, 0, width / 2]}
            outputCardOpacityRangeX={[0.8, 1, 0.8]}
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
                recipientId: userData.users[i].id,
                swipedLeft: true,
              }
              createFriendRequest({ variables })
            }}
            onSwipedRight={i => {
              const variables = {
                recipientId: userData.users[i].id,
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
