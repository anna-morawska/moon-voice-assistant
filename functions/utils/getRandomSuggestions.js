const { Suggestion } = require("dialogflow-fulfillment");

module.exports = function getRandomSuggestions(
  suggestions,
  numberOfSuggestions = 3,
  simpleResponse,
  agent
) {
  const randomSuggestions = [];
  for (let index = 0; index < numberOfSuggestions; index++) {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    const randomItem = suggestions[randomIndex];
    suggestions.splice(randomIndex, 1);
    randomSuggestions.push(randomItem);
  }

  agent.add(simpleResponse);
  randomSuggestions.forEach(cat => agent.add(new Suggestion(cat)));
};
