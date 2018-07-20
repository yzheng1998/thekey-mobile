import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import SocietyCard from '../../components/SocietyCard'
import ReactionSymbol from '../../components/ReactionSymbol'

export default class CardSwiper extends Component {
  render() {
    const { width, data } = this.props
    return (
      <Swiper
        cards={data.users}
        renderCard={item => {
          const renderUser = {
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            profilePicture: item.profilePicture,
            ...item,
            hometown: item.demographics.hometown,
            mutualFriends: item.friends,
          }
          return (
            <SocietyCard user={renderUser} navigation={this.props.navigation} />
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
      />
    )
  }
}
