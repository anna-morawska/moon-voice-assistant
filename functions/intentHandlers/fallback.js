const intents = require("../constants/intents");
const getRandomResponse = require("../utils/getRandomResponse");
const contexts = require("../constants/contexts");
const resetContext = require("../utils/resetContext");
const getMessage = require("../intentHandlers/get-message");

module.exports = function fallback(agent) {
  const conv = agent.conv();

  if (conv.contexts.get(contexts.GET_MESSAGE)) {
    getMessage(agent);
    return;
  } else if (conv.contexts.get(contexts.GET_EMAIL)) {
    const response = getRandomResponse(contexts.GET_EMAIL);
    agent.add(response);
    resetContext(agent, contexts.GET_EMAIL);
    return;
  } else {
    const response = getRandomResponse(intents.FALLBACK);
    conv.ask(response);
    return;
  }
};
