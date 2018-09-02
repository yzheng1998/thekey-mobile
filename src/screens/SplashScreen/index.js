import React, { Component } from 'react'
import { Image, View, Dimensions, SafeAreaView } from 'react-native'
import {
  Background,
  Container,
  Content,
  SubTitle,
  SwiperContainer,
  Title,
  SignInButton,
  SignInText,
  RegisterButton,
  RegisterText,
  DividerRow,
  Divider,
  DividerText,
  DevLogo,
  DevView,
  DevText,
  AbsoluteView,
} from './styles'
import Swiper from 'react-native-swiper'
import logo from '../../../assets/theKeyLogo.png'
import discoverGraphic from '../../../assets/discoverGraphic.png'
import connectGraphic from '../../../assets/connectGraphic.png'
import shareGraphic from '../../../assets/shareGraphic.png'
import devLogo from '../../../assets/DevFullLogo.png'

const { height } = Dimensions.get('window')

export default class SplashScreen extends Component {
  render() {
    return (
      <Background>
        <SafeAreaView style={{ flex: 0.5, backgroundColor: 'white' }}>
          <SwiperContainer>
            <Swiper
              ref={component => {
                this.swiper = component
              }}
              loop
              autoplay
              autoplayTimeout={2}
              scrollEnabled={false}
              style={{
                backgroundColor: 'white',
              }}
              paginationStyle={{ bottom: 14 }}
              activeDot={
                <View
                  style={{
                    backgroundColor: 'rgb(220, 60, 53)',
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              dot={
                <View
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, .2)',
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
            >
              <Content>
                <Image
                  source={logo}
                  style={{
                    height: height * 0.11,
                    width: height * 0.33,
                  }}
                />
              </Content>
              <Content>
                <Image
                  source={connectGraphic}
                  style={{
                    position: 'absolute',
                    top: 40,
                    width: height * 0.35,
                    height: height * 0.25,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                  }}
                >
                  <Title>Connect.</Title>
                  <SubTitle>Connect with peers and alumni</SubTitle>
                </View>
              </Content>
              <Content>
                <Image
                  source={discoverGraphic}
                  style={{
                    top: 38,
                    position: 'absolute',
                    width: height * 0.32,
                    height: height * 0.27,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                  }}
                >
                  <Title>Discover.</Title>
                  <SubTitle>
                    Discover opportunities, events, and groups
                  </SubTitle>
                </View>
              </Content>
              <Content>
                <Image
                  source={shareGraphic}
                  style={{
                    position: 'absolute',
                    top: 39,
                    width: height * 0.37,
                    height: height * 0.268,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                  }}
                >
                  <Title>Share.</Title>
                  <SubTitle>Share knowledge on companies</SubTitle>
                </View>
              </Content>
            </Swiper>
          </SwiperContainer>
        </SafeAreaView>
        <Container>
          <RegisterButton
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <RegisterText>APPLY</RegisterText>
          </RegisterButton>
          <DividerRow>
            <Divider />
            <DividerText>OR</DividerText>
            <Divider />
          </DividerRow>
          <SignInButton onPress={() => this.props.navigation.navigate('Login')}>
            <SignInText>SIGN IN</SignInText>
          </SignInButton>
        </Container>
        <AbsoluteView>
          <DevView>
            <DevText>Built by</DevText>
            <DevLogo source={devLogo} />
          </DevView>
        </AbsoluteView>
      </Background>
    )
  }
}
