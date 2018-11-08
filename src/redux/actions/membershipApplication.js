// Action types
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_PERSONAL_DETAILS = 'UPDATE_PERSONAL_DETAILS'
export const UPDATE_GENDER = 'UPDATE_GENDER'
export const UPDATE_ETHNICITIES = 'UPDATE_ETHNICITIES'
export const UPDATE_EDUCATIONS = 'UPDATE_EDUCATIONS'
export const UPDATE_ESSAY = 'UPDATE_ESSAY'
export const UPDATE_INTERESTS = 'UPDATE_INTERESTS'
export const UPDATE_DESCRIPTIONS = 'UPDATE_DESCRIPTIONS'
export const UPDATE_FACEBOOK_INFO = 'UPDATE_FACEBOOK_INFO'
export const UPDATE_LINKEDIN_INFO = 'UPDATE_LINKEDIN_INFO'

export const updateEmail = ({ email }) => ({
  type: UPDATE_EMAIL,
  payload: { email },
})
export const updatePassword = ({ password }) => ({
  type: UPDATE_PASSWORD,
  payload: { password },
})
export const updatePersonalDetails = ({ hometown, ethnicity, birthday }) => ({
  type: UPDATE_PERSONAL_DETAILS,
  payload: { hometown, ethnicity, birthday },
})
export const updateGender = ({ gender }) => ({
  type: UPDATE_GENDER,
  payload: { gender },
})
export const updateEthnicities = ({ ethnicities }) => ({
  type: UPDATE_ETHNICITIES,
  payload: { ethnicities },
})
export const updateEducations = ({ educations }) => ({
  type: UPDATE_EDUCATIONS,
  payload: { educations },
})
export const updateEssay = ({ essay }) => ({
  type: UPDATE_ESSAY,
  payload: { essay },
})
export const updateInterests = ({ interests }) => ({
  type: UPDATE_INTERESTS,
  payload: { interests },
})
export const updateDescriptions = ({ descriptions }) => ({
  type: UPDATE_DESCRIPTIONS,
  payload: { descriptions },
})
export const updateFacebookInfo = ({
  firstName,
  lastName,
  facebookToken,
  profilePicture,
  email,
  password,
}) => ({
  type: UPDATE_FACEBOOK_INFO,
  payload: {
    firstName,
    lastName,
    facebookToken,
    email,
    password,
    profilePicture,
  },
})
export const updateLinkedInInfo = ({
  linkedInId,
  firstName,
  lastName,
  email,
  password,
}) => ({
  type: UPDATE_LINKEDIN_INFO,
  payload: { linkedInId, firstName, lastName, email, password },
})
