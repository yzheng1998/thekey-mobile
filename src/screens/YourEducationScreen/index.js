import React, { Component } from 'react'
import { Container, InstructionsContainer, Instructions } from './styles'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import EducationList from './components/EducationList'
import SubmitButton from '../../components/SubmitButton'

import nodeEmoji from 'node-emoji'

class YourEducationScreen extends Component {
  state = {
    educationListData: [
      {
        id: 0,
        schoolName: 'Harvard University',
        schoolType: 'UNDERGRADUATE',
        location: 'Cambridge, Massachusetts',
        degreeType: 'Bachelors Degree',
        major: 'Chemical and Physical Biology',
        startYear: '2017',
        endYear: '2021',
      },
      {
        id: 1,
        schoolName: 'Beachwood High School',
        schoolType: 'SECONDARY',
        location: 'Beachwood, Ohio',
        degreeType: 'SECONDARY',
        startYear: '2013',
        endYear: '2017',
      },
    ],
  }

  updateText = (key, text) => {
    this.setState({ [key]: text })
  }

  removeEducationById = id => {
    const filteredList = this.state.educationListData.filter(el => el.id !== id)
    this.setState({ educationListData: filteredList })
  }

  render() {
    const userInfo = this.props.navigation.getParam('userInfo')
    const disabled = !this.state.educationListData.length
    const buttonText = this.state.educationListData.length
      ? '+ ADD ANOTHER SCHOOL'
      : '+ ADD SCHOOL'
    return (
      <Container>
        <Header
          title={`Your Education ${nodeEmoji.get('mortar_board')}`}
          showBack
          onBackPress={() => this.props.navigation.goBack()}
          progress="42.8%"
        />
        <InstructionsContainer>
          <Instructions>Below, add the schools you attended</Instructions>
          <Instructions>throughout your education</Instructions>
        </InstructionsContainer>
        <EducationList
          cancel={this.removeEducationById}
          educationListData={this.state.educationListData}
        />
        <RegisterButton buttonText={buttonText} secondary />
        {!disabled && (
          <SubmitButton
            onPress={() =>
              this.props.navigation.navigate('Essay', {
                userInfo: {
                  ...userInfo,
                  educationListData: this.state.educationListData,
                },
              })
            }
            buttonText="CONTINUE"
          />
        )}
      </Container>
    )
  }
}

export default YourEducationScreen
