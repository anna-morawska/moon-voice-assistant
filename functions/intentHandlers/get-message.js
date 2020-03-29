const parameters = require("../constants/parameters");
const contexts = require("../constants/contexts");
const sendEmail = require("../utils/send-email");
const getRandomResponse = require("../utils/getRandomResponse");

module.exports = function chooseCategory(agent) {
  const conv = agent.conv();

  const context = conv.contexts.get(contexts.GET_MESSAGE);
  const email = context.parameters[parameters.EMAIL];
  const message = conv.body.queryResult.queryText;

  sendEmail(email, message);

  const response = getRandomResponse(contexts.GET_MESSAGE);

  agent.context.delete(contexts.GET_MESSAGE);
  agent.context.delete(contexts.GET_EMAIL);

  agent.add(response);
};
