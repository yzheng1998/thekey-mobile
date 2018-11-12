import React, { Component } from 'react'
import notificationGraphic from '../../../../../assets/notificationGraphic.png'
import RegisterButton from '../../../../components/RegisterButton'
import {
  Card,
  Title,
  Subtitle,
  CardContainer,
  NotificationImage,
} from '../../styles'
import { Alert } from 'react-native'
import PushNotification from 'react-native-push-notification'

export default class NotificationCard extends Component {
  render() {
    const {
      isVisible,
      firstName,
      toggleNotificationCard,
      toggleCompleteCard,
    } = this.props
    return (
      <Card
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.4}
        onModalHide={toggleCompleteCard}
      >
        <CardContainer>
          <NotificationImage source={notificationGraphic} />
          <Title>Never miss an opportunity</Title>
          <Subtitle>
            Get notified of latest events, job postings, matches and everything
            else happening on The Key
          </Subtitle>
          <RegisterButton
            onPress={() => {
              PushNotification.requestPermissions()
              toggleNotificationCard()
            }}
            buttonText="ENABLE NOTIFICATIONS"
          />
          <RegisterButton
            secondary
            noBorder
            onPress={() => {
              Alert.alert(
                'Are you sure?',
                `${firstName}, you're important in The Key's community!`,
                [
                  {
                    text: `I'll miss out`,
                    onPress: toggleNotificationCard,
                  },
                  {
                    text: 'I want in!',
                    onPress: () => {
                      toggleNotificationCard()
                      PushNotification.requestPermissions()
                    },
                  },
                ],
                { cancelable: true },
              )
            }}
            buttonText="No thanks"
          />
        </CardContainer>
      </Card>
    )
  }
}
