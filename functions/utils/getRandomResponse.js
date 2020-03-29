const responses = require("../constants/responses");

module.exports = function getRandomResponse(intent) {
  const response =
    responses[intent][Math.floor(Math.random() * responses[intent].length)];
  return response;
};
