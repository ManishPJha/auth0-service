import { auth, requiredScopes } from "express-oauth2-jwt-bearer";

if (!process.env.ISSUER_BASE_URL || !process.env.AUTH0_M2M_AUDIENCE) {
  throw "Make sure you have ISSUER_BASE_URL, and AUDIENCE in your .env file";
}

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: process.env.AUTH0_M2M_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
});

const checkScopes = requiredScopes("read:messages");

export { checkJwt, checkScopes };
