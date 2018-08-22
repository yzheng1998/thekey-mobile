import React, { Component } from 'react'
import { BackgroundImage, SafeView, HeaderContainer, Title } from './styles'
import ButtonRow from './components/ButtonRow'

export default class MainHeader extends Component {
  render() {
    const { backgroundImage, title, ButtonChildren, children } = this.props
    return (
      <BackgroundImage source={backgroundImage}>
        <SafeView>
          <HeaderContainer>
            <ButtonRow navigation={this.props.navigation}>
              {ButtonChildren}
            </ButtonRow>
            <Title>{title}</Title>
            {children}
          </HeaderContainer>
        </SafeView>
      </BackgroundImage>
    )
  }
}
