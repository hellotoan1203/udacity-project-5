// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'zbchxj37x4'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-kyjjqrvl.us.auth0.com',            // Auth0 domain
  clientId: '6RQXKIixAreXNVnacvECximvsXOsLSS0',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
