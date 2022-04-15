require('dotenv').config();

/* Frontend paths */

/* Backend hosts */
const USERS_HOST = process.env
                          .REACT_APP_USERS_HOST;

/* Backends paths */
const SIGN_UP_URL = "/signup";
const SIGN_UP_END_URL = SIGN_UP_URL + "/end";
const FORGOT_PASSWORD_URL = "/forgotpassword"

const REDIRECT_URL = "/redirect";

const API_KEY_URL = "/apikeys";
const API_KEY_DOWN_URL = API_KEY_URL + "/down";
const API_KEY_UP_URL = API_KEY_URL + "/up";
const API_KEY_QUERY_PARAM = "apiKey=";
const USER_ID_QUERY_PARAM = "userId=";

const MY_API_KEY = "735e4fd4ce022f775285b8760cd053388bba04e926a5987585f89fb8f21b235f";

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
  PASSWORD_MIN_LEN,
  API_KEY_DOWN_URL,
  API_KEY_QUERY_PARAM,
  API_KEY_UP_URL,
  REDIRECT_URL,
  USER_ID_QUERY_PARAM,
  MY_API_KEY
}
