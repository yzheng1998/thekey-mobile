const baseUrl = 'http://localhost:5000'

module.exports = {
  graphqlUrl: process.env.REACT_APP_API_URL || `${baseUrl}/graphql`,
  resumeUploadUrl: `${baseUrl}/upload`,
  graphqlWsUrl:
    process.env.REACT_APP_WS_API_URL || 'ws://localhost:5000/subscriptions',
  LinkedInClientID: '779rrrorh2glbm',
  LinkedInRedirectUri: 'https://thekey-api-staging.herokuapp.com/auth/linkedin',
  s3Bucket: 'https://s3.amazonaws.com/thekey-events/',
  geocoderApiKey: 'AIzaSyCVvYisZmFqXG0cFD9B6r8utyxnQyzo0r4',
  reviewableCompanyLimit: 50,
  reviewsLimit: 50,
  eventsLimit: 50,
  similarEventsLimit: 10,
  jobsLimit: 50,
  similarJobsLimit: 10,
  chatLimit: 50,
  messageLimit: 15,
  societySearchLimit: 10,
}
