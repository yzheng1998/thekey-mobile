import React, { Component } from 'react'
import {
  BigContainer,
  Container,
  Title,
  Header,
  Body,
  Subtitle,
  Detail,
  BackButtonContainer,
} from './styles'
import BackButton from 'react-native-vector-icons/Ionicons'

class JobSummaryScreen extends Component {
  render() {
    const {
      aboutRole,
      aboutCompany,
      contribution,
      companyOffer,
      commitment,
      industry,
    } = this.props
    return (
      <BigContainer>
        <Container>
          <BackButtonContainer onPress={() => this.props.navigation.goBack()}>
            <BackButton
              name="ios-arrow-back"
              size={27}
              color="rgb(148,157,170)"
            />
          </BackButtonContainer>
          <Title>Summary</Title>
          <Header>About The Role</Header>
          <Body>{aboutRole}</Body>
          <Header>About The Company</Header>
          <Body>{aboutCompany}</Body>
          <Header>What You Will Bring To The Role</Header>
          <Body>{contribution}</Body>
          <Header>What The Company Can Offer</Header>
          <Body>{companyOffer}</Body>
          <Header>Job Details</Header>
          <Subtitle>Employment Type</Subtitle>
          <Detail>{commitment}</Detail>
          <Subtitle>Industry</Subtitle>
          <Detail>{industry}</Detail>
        </Container>
      </BigContainer>
    )
  }
}

export default JobSummaryScreen
