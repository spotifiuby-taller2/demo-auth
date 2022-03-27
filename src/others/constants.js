require('dotenv').config();

/* Frontend paths */

/* Backend hosts */
const USERS_HOST = process.env
                          .REACT_APP_USERS_HOST;

/* Backends paths */
const SIGN_UP_URL = "/signup";
const SIGN_UP_END_URL = SIGN_UP_URL + "/end";
const FORGOT_PASSWORD_URL = "/forgotpassword"

const JSON_HEADER = {
  'Content-Type': 'application/json'
}

const PASSWORD_MIN_LEN = 10;

module.exports = {
  USERS_HOST,
  SIGN_UP_URL,
  JSON_HEADER,
  SIGN_UP_END_URL,
  FORGOT_PASSWORD_URL,
  PASSWORD_MIN_LEN
}
