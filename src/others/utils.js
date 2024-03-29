import constants from "./constants";

import sjcl from 'sjcl';

function getSHAOf(toHash) {
    const myBitArray = sjcl.hash.sha256.hash(toHash)
    const myHash = sjcl.codec.hex.fromBits(myBitArray)
    return myHash;
}

/*
const postTo = (url, body, f) => {
  // response.json() is a promise
  fetch(url, {
        method: "POST",
        headers: constants.JSON_HEADER,
        body: JSON.stringify(body)
      }
  ).then(response => response.json()
  ).then(f);
} */

const postToGateway = (body) => {
    body.verbRedirect = "POST";
    body.apiKey = constants.MY_API_KEY;
    console.log(constants.SERVICES_HOST + constants.REDIRECT_URL);

    return fetch(constants.SERVICES_HOST + constants.REDIRECT_URL, {
            method: "POST",
            headers: constants.JSON_HEADER,
            body: JSON.stringify(body)
        }
    ).then(response =>
        response.json()
    ).catch(error => {
        return {
            error: error.toString()
        };
    } );
}

const getToGateway = (destiny,
                      redirectParams) => {
    const body = {}
    body.redirectParams = redirectParams
    body.verbRedirect = "GET";
    body.redirectTo = destiny;
    body.apiKey = constants.MY_API_KEY;

    return fetch(constants.SERVICES_HOST + constants.REDIRECT_URL, {
            method: "POST",
            headers: constants.JSON_HEADER,
            body: JSON.stringify(body)
        }
    ).then(response =>
        response.json()
    ).catch(error => {
        return {
            error: error.toString()
        };
    } );
}

function getTo(url, f) {
  fetch(url, {
        method: "GET",
        headers: constants.JSON_HEADER,
      }
  ).then(response => response.json()
  ).then(f);
}

export {
  getTo,
  getSHAOf,
  getToGateway,
  postToGateway
}