"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth0_1 = require("auth0");
if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_CLIENT_ID || !process.env.AUTH0_CLIENT_SECRET) {
    throw new Error("AUTH0_DOMAIN, AUTH0_CLIENT_ID, and AUTH0_CLIENT_SECRET must be set in the.env file");
}
const auth0Client = new auth0_1.ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    // scope: "read:users update:users create:users delete:users"
});
exports.default = auth0Client;
