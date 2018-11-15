import React, { Component } from 'react'
import { Container, InstructionsContainer, Instructions } from './styles'
import Header from '../../components/Header'
import RegisterButton from '../../components/RegisterButton'
import EducationList from './components/EducationList'
import SubmitButton from '../../components/SubmitButton'
import SchoolSearchModal from '../../components/SchoolSearchModal'
import AddEducationModal from './components/AddEducationModal'
import { SafeAreaView } from 'react-native'
import nodeEmoji from 'node-emoji'
import constraints from './constraints'

const validate = require('validate.js')

import { connect } from 'react-redux'
import { updateEducations } from '../../redux/actions/membershipApplication'

const mapStateToProps = state => ({
  educations: state.membershipApplication.educations,
})

const mapDispatchToProps = {
  updateEducations,
}

const schoolTypeOptions = [
  { label: 'Secondary', value: 'SECONDARY' },
  { label: 'Undergraduate', value: 'UNDERGRADUATE' },
  { label: 'Graduate', value: 'GRADUATE' },
]

class YourEducationScreen extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.setState.bind(this)
    this.state = {
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
      educationListData: props.educations || [],
      displayErrors: {},
      errors: {},
      touched: {},
      closeModal: false,
    }
  }

  toggleSchoolModal = () => {
    this.setState({ showSchoolSearchModal: !this.state.showSchoolSearchModal })
  }

  toggleEducationModal = () => {
    this.setState({ showAddEducationModal: !this.state.showAddEducationModal })
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
      isCurrentEmployee: false,
      schoolType: '',
      degreeType: '',
      displayErrors: {},
      errors: {},
      touched: {},
      closeModal: false,
    })
  }

  validateForm = isOnChangeText => {
    const errors = validate(
      {
        schoolName: this.state.schoolName,
        schoolType: this.state.schoolType,
        degreeType: this.state.degreeType,
        major: this.state.major,
        startYear: this.state.startYear,
        endYear: this.state.endYear,
      },
      constraints,
    )

    const constructDisplayErrors = () => {
      const displayErrors = {}
      Object.keys(errors || {}).forEach(key => {
        if (this.state.touched[key]) {
          displayErrors[key] = errors[key]
        }
      })
      return displayErrors
    }

    const errorsReduced =
      Object.keys(errors || {}).length <
      Object.keys(this.state.errors || {}).length

    if (!isOnChangeText || (isOnChangeText && errorsReduced)) {
      this.setState({ displayErrors: constructDisplayErrors() })
    }
    this.setState({ errors })
  }

  addTouched = key => {
    const touched = {
      ...this.state.touched,
      [key]: true,
    }
    this.setState({ touched })
  }

  render() {
    const disabled = !this.state.educationListData.length
    const buttonText = this.state.educationListData.length
      ? '+ ADD ANOTHER SCHOOL'
      : '+ ADD SCHOOL'
    const handleEducationChange = () =>
      this.props.updateEducations({
        educations: this.state.educationListData,
      })
    const addEducation = schoolObj => {
      this.setState(
        {
          educationListData: [...this.state.educationListData, schoolObj],
        },
        handleEducationChange,
      )
    }

    const removeEducationById = id => {
      const filteredList = this.state.educationListData.filter(
        el => el.schoolId !== id,
      )
      this.setState({ educationListData: filteredList }, handleEducationChange)
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
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
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
            cancel={removeEducationById}
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
            validateForm={this.validateForm}
            addTouched={this.addTouched}
          />
          <SchoolSearchModal
            updateState={this.updateState}
            onDismiss={
              this.state.closeModal ? () => null : this.toggleEducationModal
            }
            navigation={this.props.navigation}
            toggleSchoolModal={this.toggleSchoolModal}
            visible={this.state.showSchoolSearchModal}
          />
        </SafeAreaView>
        {!disabled && (
          <SubmitButton
            onPress={() => {
              handleEducationChange()
              this.props.navigation.navigate('PhotoUpload')
            }}
            buttonText="CONTINUE"
          />
        )}
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourEducationScreen)
