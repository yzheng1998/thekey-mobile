// Action types
export const UPDATE_ACCOUNT_INFO = 'UPDATE_ACCOUNT_INFO'
export const UPDATE_PERSONAL_DETAILS = 'UPDATE_PERSONAL_DETAILS'
export const UPDATE_GENDER = 'UPDATE_GENDER'
export const UPDATE_EDUCATIONS = 'UPDATE_EDUCATIONS'
export const UPDATE_ESSAY = 'UPDATE_ESSAY'
export const UPDATE_INTERESTS = 'UPDATE_INTERESTS'
export const UPDATE_DESCRIPTIONS = 'UPDATE_DESCRIPTIONS'
export const UPDATE_RESUMES = 'UPDATE_RESUMES'
export const UPDATE_FACEBOOK_INFO = 'UPDATE_FACEBOOK_INFO'
export const UPDATE_LINKEDIN_INFO = 'UPDATE_LINKEDIN_INFO'

export const updateAccountInfo = ({
  firstName,
  lastName,
  email,
  password,
}) => ({
  type: UPDATE_ACCOUNT_INFO,
  payload: { firstName, lastName, email, password },
})
export const updatePersonalDetails = ({ hometown, ethnicity, birthday }) => ({
  type: UPDATE_PERSONAL_DETAILS,
  payload: { hometown, ethnicity, birthday },
})
export const updateGender = ({ gender }) => ({
  type: UPDATE_GENDER,
  payload: { gender },
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
export const updateResumes = ({ resumes }) => ({
  type: UPDATE_RESUMES,
  payload: { resumes },
})
export const updateFacebookInfo = ({ facebookInfo }) => ({
  type: UPDATE_FACEBOOK_INFO,
  payload: { facebookInfo },
})
export const updateLinkedInInfo = ({ linkedInInfo }) => ({
  type: UPDATE_LINKEDIN_INFO,
  payload: { linkedInInfo },
})
