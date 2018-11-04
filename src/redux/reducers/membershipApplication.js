import {
  UPDATE_EMAIL,
  UPDATE_PERSONAL_DETAILS,
  UPDATE_ESSAY,
  UPDATE_GENDER,
  UPDATE_ETHNICITIES,
  UPDATE_EDUCATIONS,
  UPDATE_INTERESTS,
  UPDATE_DESCRIPTIONS,
  UPDATE_FACEBOOK_INFO,
  UPDATE_LINKEDIN_INFO,
} from '../actions/membershipApplication'

const initialState = {
  membershipApplication: {},
}

const membershipApplicationReducer = (state = initialState, action) => {
  const updatedState = newInfo => ({
    ...state,
    membershipApplication: {
      ...state.membershipApplication,
      ...newInfo,
    },
  })
  switch (action.type) {
    case UPDATE_EMAIL: {
      return updatedState({
        email: action.payload.email,
      })
    }
    case UPDATE_PERSONAL_DETAILS: {
      return updatedState({
        hometown: action.payload.hometown,
        birthday: action.payload.birthday,
      })
    }
    case UPDATE_GENDER: {
      return updatedState({
        gender: action.payload.gender,
      })
    }
    case UPDATE_ETHNICITIES: {
      return updatedState({
        ethnicities: action.payload.ethnicities,
      })
    }
    case UPDATE_EDUCATIONS: {
      return updatedState({
        educations: action.payload.educations,
      })
    }
    case UPDATE_ESSAY: {
      return updatedState({
        essay: action.payload.essay,
      })
    }
    case UPDATE_INTERESTS: {
      return updatedState({
        interests: action.payload.interests,
      })
    }
    case UPDATE_DESCRIPTIONS: {
      return updatedState({
        selfDescription: action.payload.descriptions,
      })
    }
    case UPDATE_FACEBOOK_INFO: {
      return updatedState({
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        facebookToken: action.payload.facebookID,
        email: action.payload.email,
        password: action.payload.password,
        profilePicture: action.payload.profilePicture,
      })
    }
    case UPDATE_LINKEDIN_INFO: {
      return updatedState({
        linkedInId: action.payload.linkedInId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: '',
      })
    }
    default: {
      return state
    }
  }
}

export default membershipApplicationReducer
