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
import { buttonRadius } from '../../constants'

const commitmentOptions = [
  { value: 'FULLTIME', label: 'Full-Time' },
  { value: 'PARTTIME', label: 'Part-Time' },
  { value: 'INTERNSHIP', label: 'Internship' },
]

class JobSummaryScreen extends Component {
  static defaultProps = {
    aboutRole:
      'This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question. ',
    aboutCompany:
      'This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question. ',
    bringToRole:
      'This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question. ',
    commitment: 'Full-time',
    industry: 'Music & Entertainment',
  }
  render() {
    const aboutRole = this.props.navigation.getParam('aboutRole')
    const aboutCompany = this.props.navigation.getParam('aboutCompany')
    const bringToRole = this.props.navigation.getParam('bringToRole')
    const commitment = this.props.navigation.getParam('commitment')
    const industry = this.props.navigation.getParam('industry')
    return (
      <BigContainer>
        <Container>
          <BackButtonContainer
            hitSlop={buttonRadius}
            onPress={() => this.props.navigation.goBack()}
          >
            <BackButton
              name="ios-arrow-back"
              size={30}
              color="rgb(148,157,170)"
            />
          </BackButtonContainer>
          <Title>Summary</Title>
          <Header>About The Role</Header>
          <Body>{aboutRole}</Body>
          <Header>About The Company</Header>
          <Body>{aboutCompany}</Body>
          <Header>What You Will Bring To The Role</Header>
          <Body>{bringToRole}</Body>
          <Header>Job Details</Header>
          <Subtitle>Employment Type</Subtitle>
          <Detail>
            {commitmentOptions.find(el => el.value === commitment).label}
          </Detail>
          <Subtitle>Industry</Subtitle>
          <Detail>{industry}</Detail>
        </Container>
      </BigContainer>
    )
  }
}

export default JobSummaryScreen
