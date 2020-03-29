const contexts = require("../constants/contexts");
const intents = require("../constants/intents");
const rq = require("request-promise");
const getRandomResponse = require("../utils/getRandomResponse");

module.exports = function redirect(agent) {
  return new Promise(resolve => {
    const conv = agent.conv();

    // const socketId = conv.contexts.get(contexts.SOCKET_ID).parameters.socketId;
    const context = conv.contexts.get(contexts.REDIRECT);
    const page = context.parameters.page;

    var options = {
      method: "POST",
      uri: "https://moon-voice-assistant.herokuapp.com/redirect",
      body: {
        route: page
      },
      json: true
    };

    rq(options)
      .then(_ => {
        const response = getRandomResponse(intents.REDIRECT);
        agent.add(response);
        return resolve();
      })
      .catch(err => {
        console.log(err);
        agent.add(
          "Sorry, there are some technical issues, please try again later"
        );
        return resolve();
      });
  });
};
