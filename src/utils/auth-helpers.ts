import axios from "axios";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

if (
  !process.env.AUTH0_CLIENT_ID ||
  !process.env.AUTH0_CLIENT_SECRET ||
  !process.env.AUTH0_AUDIENCE
) {
  throw new Error(
    "AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, and AUTH0_AUDIENCE must be set in the.env file"
  );
}

export async function getM2MToken() {
  // Get M2M token through Client Credentials Flow
  var options = {
    method: "POST",
    url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    headers: {
      "content-type": "application/json",
    },
    data: {
      grant_type: "client_credentials",
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
    },
  };
  // Extract 'access_token' out of response
  let newToken = await axios
    .request(options)
    .then(async function (response) {
      return await response.data["access_token"];
    })
    .catch(function (error) {
      console.error(error);
    });

  return newToken;
}

// export async function sendEmailVerification(
//   event: any,
//   newToken: string,
//   axios: AxiosInstance
// ) {
//   var options = {
//     method: "POST",
//     url: `https://${event.secrets.domain}/api/v2/jobs/verification-email`,
//     headers: {
//       "content-type": "application/json",
//       authorization: `Bearer ${newToken}`,
//     },
//     data: {
//       user_id: event.user.user_id,
//       client_id: event.secrets.clientId,
//     },
//   };

//   await axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }
