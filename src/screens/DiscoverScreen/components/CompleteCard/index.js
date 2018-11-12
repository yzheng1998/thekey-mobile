import React, { Component } from 'react'
import RegisterButton from '../../../../components/RegisterButton'
import { Card, Title, Subtitle, CardContainer } from '../../styles'

export default class CompleteCard extends Component {
  render() {
    const { isVisible, navigation, toggleCompleteCard } = this.props
    return (
      <Card
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.4}
        onModalHide={() => {
          navigation.navigate('EditProfile')
        }}
      >
        <CardContainer>
          <Title>Finish your profile!</Title>
          <Subtitle>
            Tell the community a little more about yourself, we are excited to
            learn more about you!
          </Subtitle>
          <RegisterButton
            onPress={toggleCompleteCard}
            buttonText="COMPLETE YOUR PUBLIC PROFILE"
          />
        </CardContainer>
      </Card>
    )
  }
}
