const rq = require("request-promise");
const cheerio = require("cheerio");

const BLOG_URL = "https://blog.mooncascade.com";
const createBrowseCarousel = require("../utils/browseCarousel");
const parameters = require("../constants/parameters");

function getPostsFromCategory(category) {
  return new Promise(resolve => {
    const url = `${BLOG_URL}/category/${category}`;
    const options = {
      uri: url,
      transform: function(body) {
        return cheerio.load(body);
      }
    };

    rq(options)
      .then(function($) {
        const results = $(".site-main")
          .find("article")
          .map(function(index, element) {
            const author = $(this)
              .find(".author.vcard")
              .text();
            const title = $(this)
              .find(".entry-title")
              .text();

            const url = $(this)
              .find("a")
              .attr("href");

            const description = $(this)
              .find(".entry-content")
              .text()
              .trim();

            const image = $(this)
              .find(".post-featured-image")
              .attr("style")
              .slice(23, -2);

            const alt = "Blog post feature image";

            const footer = "Read more";

            return { title, url, description, author, image, alt, footer };
          })
          .get();

        return resolve(results);
      })
      .catch(err => {
        console.log(err);
        resolve();
      });
  });
}

module.exports = function chooseCategory(agent) {
  return new Promise(resolve => {
    const category = agent.parameters[parameters.BLOG_CATEGORIES];
    console.log(category);

    getPostsFromCategory(category)
      .then(results => {
        createBrowseCarousel(agent, results);
        return resolve();
      })
      .catch(error => {
        console.log(error);
        agent.add(
          "Sorry, there are some technical issues, please try again later"
        );
        return resolve();
      });
  });
};
