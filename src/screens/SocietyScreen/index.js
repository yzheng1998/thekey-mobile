import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Dimensions, TouchableOpacity } from 'react-native'
import { tagData, profilePicture } from '../../stories/SocietyCard'
import SocietyCard from './components/SocietyCard'
import ReactionSymbol from './components/ReactionSymbol'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  SwiperContainer,
  Background,
  HeaderBackground,
  Title,
  ButtonRow,
} from './styles'
import Swiper from 'react-native-deck-swiper'

const { width } = Dimensions.get('window')

const GET_USERS = gql`
  query users {
    users {
      id
      firstName
      lastName
      email
      friends {
        id
        profilePicture
      }
    }
  }
`

class SocietyScreen extends Component {
  render() {
    return (
      <Background>
        <HeaderBackground>
          <Title>The Society</Title>
        </HeaderBackground>
        <ButtonRow>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="md-search" color="white" size={25} />
          </TouchableOpacity>
        </ButtonRow>
        <Query query={GET_USERS}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            return (
              <SwiperContainer>
                <Swiper
                  cards={data.users}
                  renderCard={item => {
                    const renderUser = {
                      firstName: item.firstName,
                      lastName: item.lastName,
                      email: item.email,
                      mutualFriends: item.friends,
                      state: 'Ohio',
                      hometown: 'Cleveland',
                      bio:
                        'A Harvard undergraduate student looking for a impactful and fufilling career',
                      profilePicture,
                      tags: tagData,
                    }
                    return <SocietyCard user={renderUser} />
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
              </SwiperContainer>
            )
          }}
        </Query>
      </Background>
    )
  }
}

export default SocietyScreen
