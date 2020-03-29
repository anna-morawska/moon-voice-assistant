const parameters = require("../constants/parameters");
const contexts = require("../constants/contexts");
const getRandomResponse = require("../utils/getRandomResponse");
const { Card } = require("dialogflow-fulfillment");

module.exports = function getAddress(agent) {
  const conv = agent.conv();

  const context = conv.contexts.get(contexts.NAVIGATE);
  const office = context.parameters[parameters.OFFICE_ADDRESS];

  if (office) {
    const response = getRandomResponse(contexts.NAVIGATE);
    const tartuCoordinates = "58.3814352,26.7296257";
    const tallinnCoordinates = "59.4323091,24.767019";

    agent.add(response);
    agent.add(
      new Card({
        imageUrl:
          "https://images.hgmsites.net/lrg/google-maps-logo_100688782_l.jpg",
        title: `Office in ${office}`,
        buttonText: "Navigate",
        buttonUrl: `https://www.google.com/maps/dir/?api=1&destination=${
          office === "Tartu" ? tartuCoordinates : tallinnCoordinates
        }&travelmode=driving&dir_action=navigate`
      })
    );
  } else {
    agent.add("else block");
  }
};
