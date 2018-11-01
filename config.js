module.exports = {
  graphqlUrl:
    process.env.REACT_APP_API_URL ||
    'https://thekey-api-production.herokuapp.com/graphql',
  graphqlWsUrl:
    process.env.REACT_APP_WS_API_URL ||
    'wss://thekey-api-production.herokuapp.com/subscriptions',
  LinkedInClientID: '779rrrorh2glbm',
  LinkedInRedirectUri:
    'https://thekey-api-production.herokuapp.com/auth/linkedin',
  s3Bucket: 'https://s3.amazonaws.com/thekey-files-production/',
  geocoderApiKey: 'AIzaSyCVvYisZmFqXG0cFD9B6r8utyxnQyzo0r4',
  reviewableCompanyLimit: 30,
  reviewsLimit: 30,
  eventsLimit: 20,
  similarEventsLimit: 5,
  jobsLimit: 20,
  similarJobsLimit: 20,
  chatLimit: 10,
  messageLimit: 15,
  societySearchLimit: 20,
}
