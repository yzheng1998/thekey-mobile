import { storiesOf } from '@storybook/react-native'
import React from 'react'
import JobSummary from '../screens/JobSummaryScreen'

storiesOf('CenteredView').add('JobSummary', () => (
  <JobSummary
    aboutRole="This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question. "
    aboutCompany="This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question. "
    companyOffer="This would be a default cover letter that a user could configure in their settings. From here they could send as-is, or adjust the text to better suit the position in question. "
    contribution="This would be a default cover letter that a user could configure in their settings. "
    commitment="Full-time"
    industry="Music & Entertainment"
  />
))
