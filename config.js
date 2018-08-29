module.exports = {
  graphqlUrl: process.env.REACT_APP_API_URL || 'https://thekey-api-staging.herokuapp.com/graphql',
  graphqlWsUrl:
    process.env.REACT_APP_WS_API_URL || 'ws://localhost:8080/subscriptions',
  LinkedInClientID: '7741ysuwp6w3ty',
  LinkedInRedirectUri: 'http://localhost:3000/auth/linkedin',
  s3Bucket: 'https://s3.amazonaws.com/thekey-events/',
}
