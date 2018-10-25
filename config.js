module.exports = {
  graphqlUrl: process.env.REACT_APP_API_URL || 'http://localhost:5000/graphql',
  graphqlWsUrl:
    process.env.REACT_APP_WS_API_URL || 'ws://localhost:5000/subscriptions',
  LinkedInClientID: '779rrrorh2glbm',
  LinkedInRedirectUri: 'https://thekey-api-staging.herokuapp.com/auth/linkedin',
  s3Bucket: 'https://s3.amazonaws.com/thekey-events/',
  geocoderApiKey: 'AIzaSyCVvYisZmFqXG0cFD9B6r8utyxnQyzo0r4',
  reviewableCompanyLimit: 30,
  reviewsLimit: 30,
  eventsLimit: 20,
  similarEventsLimit: 5,
  jobsLimit: 20,
  similarJobsLimit: 20,
  chatLimit: 10,
  messageLimit: 15,
  societySearchLimit: 10,
}
