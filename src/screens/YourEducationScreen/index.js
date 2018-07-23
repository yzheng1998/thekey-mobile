import React, { Component } from 'react'
import { Container, InstructionsContainer, Instructions } from './styles'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import EducationList from './components/EducationList'
import SubmitButton from '../../components/SubmitButton'
import SchoolSearchModal from '../../components/SchoolSearchModal'
import AddEducationModal from './components/AddEducationModal'

import nodeEmoji from 'node-emoji'

const schoolTypeOptions = [
  { label: 'Secondary', value: 'SECONDARY' },
  { label: 'Undergraduate', value: 'UNDERGRADUATE' },
  { label: 'Graduate', value: 'GRADUATE' },
]

class YourEducationScreen extends Component {
  state = {
    showSchoolSearchModal: false,
    showAddEducationModal: false,
    schoolName: '',
    schoolType: '',
    degreeType: '',
    location: '',
    major: '',
    startYear: '',
    endYear: '',
    isCurrentEmployee: false,
    educationListData: [],
  }

  toggleSchoolModal = () => {
    this.setState({ showSchoolSearchModal: !this.state.showSchoolSearchModal })
  }

  toggleEducationModal = () => {
    this.setState({ showAddEducationModal: !this.state.showAddEducationModal })
  }

  removeEducationById = id => {
    const filteredList = this.state.educationListData.filter(
      el => el.schoolId !== id,
    )
    this.setState({ educationListData: filteredList })
  }

  updateState = obj => {
    this.setState(obj)
  }

  clearState = () => {
    this.setState({
      schoolId: '',
      schoolName: '',
      location: '',
      major: '',
      startYear: '',
      endYear: '',
      isCurrentEmployee: '',
      schoolType: '',
      degreeType: '',
    })
  }

  render() {
    const userInfo = this.props.navigation.getParam('userInfo')
    const disabled = !this.state.educationListData.length
    const buttonText = this.state.educationListData.length
      ? '+ ADD ANOTHER SCHOOL'
      : '+ ADD SCHOOL'

    const addEducation = schoolObj => {
      this.setState({
        educationListData: [...this.state.educationListData, schoolObj],
      })
    }
    const {
      schoolId,
      schoolName,
      schoolType,
      degreeType,
      location,
      major,
      startYear,
      endYear,
    } = this.state
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
        <RegisterButton
          buttonText={buttonText}
          secondary
          onPress={() => this.setState({ showSchoolSearchModal: true })}
        />
        <AddEducationModal
          addEducation={() => {
            addEducation({
              schoolId,
              schoolName,
              schoolType,
              degreeType,
              location,
              major,
              startYear,
              endYear,
            })
          }}
          schoolTypeOptions={schoolTypeOptions}
          clearState={this.clearState}
          state={this.state}
          updateText={this.updateState}
          toggleEducationModal={this.toggleEducationModal}
          visible={this.state.showAddEducationModal}
        />
        <SchoolSearchModal
          updateState={this.updateState}
          toggleEducationModal={this.toggleEducationModal}
          navigation={this.props.navigation}
          toggleSchoolModal={this.toggleSchoolModal}
          visible={this.state.showSchoolSearchModal}
        />
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
