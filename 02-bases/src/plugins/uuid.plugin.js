const { v4 } = require("uuid");

const getUUID = () => v4();

module.exports = {
  getUUID,
};
