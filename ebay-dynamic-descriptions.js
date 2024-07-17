const EbayAuthToken = require("ebay-oauth-nodejs-client");
const clientId = "GeorgeAn-iCarCove-SBX-7733b4127-e7231cc4";
const clientSecret = "SBX-733b4127ce7c-05dc-4bbd-a6ba-8f67";
const redirectUri = encodeURIComponent(
  "George_Anumba-GeorgeAn-iCarCo-fxvthnwp"
);
const scope = "https://api.ebay.com/oauth/api_scope/sell.inventory";
const ENVIRONMENT = "SANDBOX";
const code = "";

const ebayAuthToken = new EbayAuthToken({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri,
  env: ENVIRONMENT,
});
console.log(ebayAuthToken);

(() => {
  const authUrl = ebayAuthToken?.generateUserAuthorizationUrl(
    ENVIRONMENT,
    scope
  );
  console.log(authUrl);
})();

(async () => {
  const accessToken = await ebayAuthToken.exchangeCodeForAccessToken(
    ENVIRONMENT,
    code
  );
  console.log(accessToken);
})();

// const AUTH_URL =
//   ENVIRONMENT === "PRODUCTION"
//     ? `https://auth.ebay.com/oauth2/authorize?`
//     : "https://auth.sandbox.ebay.com/oauth2/authorize";
// const authorizationUrl =
//   AUTH_URL +
//   querystring.stringify({
//     client_id: clientId,
//     redirect_uri: redirectUri,
//     response_type: "code",
//     scope: scope,
//   });
