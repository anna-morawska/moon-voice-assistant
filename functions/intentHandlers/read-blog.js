const intents = require("../constants/intents");
const getRandomResponse = require("../utils/getRandomResponse");
const getRandomSuggestions = require("../utils/getRandomSuggestions");

module.exports = function readBlog(agent) {
  const categories = [
    "Data Science",
    "Human resources",
    "Fin-tech",
    "Telco",
    "Product development",
    "Mobility"
  ];

  const response = getRandomResponse(intents.READ_BLOG);
  getRandomSuggestions(categories, 3, response, agent);
};
