const axios = require("axios");

/* const httpCientPlugin = (url, props) => {
  return fetch(
    url,
    props ? {...props} : null,
  ).then((fetchResponse) => fetchResponse.json());
}; */

const httpCientPlugin = {
  get: (url) => {
    const response = axios.get(url);

    return response;
  }
};

module.exports = {
  httpCientPlugin,
};
