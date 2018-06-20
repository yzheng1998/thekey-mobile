import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import React from 'react'
import MutualConnectionsRow from '../screens/SocietyScreen/components/MutualConnectionsRow'
import InterestedFriendsRow from '../screens/EventsScreen/components/InterestedFriendsRow'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
}
const CenteredView = ({ children }) => <View style={style}>{children}</View>

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

storiesOf('CenteredView').add('ConnectionsRow1', () => (
  <CenteredView>
    <MutualConnectionsRow
      avatarNum={5}
      avatarSize={28}
      mutualFriends={friends}
      connectionsNum={friends.length}
    />
    <InterestedFriendsRow
      avatarNum={5}
      avatarSize={28}
      mutualFriends={friends}
      connectionsNum={friends.length}
    />
    <MutualConnectionsRow
      avatarNum={5}
      avatarSize={28}
      mutualFriends={friends.slice(0, 0)}
      connectionsNum={0}
    />
    <InterestedFriendsRow
      avatarNum={5}
      avatarSize={28}
      mutualFriends={friends.slice(0, 0)}
      connectionsNum={0}
    />
  </CenteredView>
))
