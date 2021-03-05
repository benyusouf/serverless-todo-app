// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'n70juichw0'
export const apiEndpoint = `https://${apiId}.execute-api.us-west-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'benyusouf.eu.auth0.com',            // Auth0 domain
  clientId: 'HOWqYXmXerQdrGTFK2gml5zkMWt3ogoz',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
