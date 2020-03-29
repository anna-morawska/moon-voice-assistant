const contexts = require("../constants/contexts");
const intents = require("../constants/intents");
const resetContext = require("../utils/resetContext");

module.exports = function setSocketId(agent) {
  return new Promise(resolve => {
    const conv = agent.conv();
    console.log(conv.contexts.get(contexts.SOCKET_ID));
    agent.add("response");

    return resolve();
  });
};
