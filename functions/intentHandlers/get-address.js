const parameters = require("../constants/parameters");
const contexts = require("../constants/contexts");
const getRandomResponse = require("../utils/getRandomResponse");
const { Suggestion } = require("dialogflow-fulfillment");

module.exports = function getAddress(agent) {
  const conv = agent.conv();

  const context = conv.contexts.get(contexts.GET_ADDRESS);
  const office = context.parameters[parameters.OFFICE_ADDRESS];

  if (office) {
    const tallinnAddress = `Tallinn, Tartu mnt 43`;
    const tartuAddress = `Tartu, Narva mnt 9`;

    const response = `The office address is ${
      office === "Tallinn" ? tallinnAddress : tartuAddress
    }`;

    agent.add(response);
    agent.add(new Suggestion(`Navigate me to ${office} office`));
  } else {
    const response = getRandomResponse(contexts.GET_ADDRESS);

    agent.add(response);
    agent.add(new Suggestion(`Navigate me to Tallinn office`));
    agent.add(new Suggestion(`Navigate me to Tartu office`));
  }
};
