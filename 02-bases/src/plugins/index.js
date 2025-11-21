const getAge = require("get-age");
const { getUUID } = require("./uuid.plugin");
const { httpCientPlugin } = require("./http-client.plugin");

module.exports = {
  getAge,
  getUUID,
  httpCientPlugin,
};