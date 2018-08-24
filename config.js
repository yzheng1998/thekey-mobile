module.exports = {
  graphqlUrl:
    process.env.REACT_APP_API_URL ||
    'https://thekey-api-staging.herokuapp.com/graphql',
  graphqlWsUrl:
    process.env.REACT_APP_WS_API_URL ||
    'wss://thekey-api-staging.herokuapp.com/subscriptions',
  LinkedInClientID: '7741ysuwp6w3ty',
  LinkedInRedirectUri: 'https://thekey-api-staging.herokuapp.com/auth/linkedin',
  s3Bucket: 'https://s3.amazonaws.com/thekey-files-staging/',
}
