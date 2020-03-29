const parameters = require("../constants/parameters");
const getRandomSuggestions = require("../utils/getRandomSuggestions");
const { Card, Suggestion } = require("dialogflow-fulfillment");

module.exports = function contactInfo(agent) {
  const contactInfo = agent.parameters[parameters.CONTACT_INFO];

  const socialMediaChannels = [
    "linkedin",
    "facebook",
    "twitter",
    "instagram",
    "youtube"
  ];

  if (contactInfo) {
    switch (contactInfo) {
      case "phone":
        agent.add("You can contact us at this number: +372 504 5119");
        break;

      case "email":
        agent.add("You can contact us at info@mooncascade.com");
        agent.add(new Suggestion(`I want to send an email`));

        break;
      case "social-media":
        agent.add(
          "You can find us on Linkedin, Facebook, Twitter, Instagram and Youtube"
        );
        getRandomSuggestions(
          socialMediaChannels,
          3,
          "Check out our social media channels",
          agent
        );

        break;
      case "linkedin":
        agent.add("Click button bellow to check our profile");
        agent.add(
          new Card({
            imageUrl:
              "https://temitopeadelekan.files.wordpress.com/2015/05/linkedin_logo_initials.png",
            title: `Mooncascade Linkedin profile`,
            buttonText: "Open",
            buttonUrl: "https://www.linkedin.com/company/mooncascade/"
          })
        );
        break;
      case "facebook":
        agent.add("Click button bellow to check our profile");
        agent.add(
          new Card({
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1024px-Facebook_logo_36x36.svg.png",
            title: `Mooncascade Facebook profile`,
            buttonText: "Open",
            buttonUrl: "https://www.facebook.com/mooncascade"
          })
        );
        break;
      case "twitter":
        agent.add("Click button bellow to check our profile");
        agent.add(
          new Card({
            imageUrl:
              "https://banner2.cleanpng.com/20171220/arw/twitter-logo-png-5a3a185138f284.88858568151375675323333199.jpg",
            title: `Mooncascade Twitter profile`,
            buttonText: "Open",
            buttonUrl: "https://twitter.com/mooncascade"
          })
        );
        break;
      case "instagram":
        agent.add("Click button bellow to check our profile");
        agent.add(
          new Card({
            imageUrl:
              "https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png",
            title: `Mooncascade Instagram profile`,
            buttonText: "Open",
            buttonUrl: "https://www.instagram.com/mooncascade/"
          })
        );
        break;
      case "youtube":
        agent.add("Click button bellow to check our profile");
        agent.add(
          new Card({
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/YouTube_social_white_squircle_%282017%29.svg/1024px-YouTube_social_white_squircle_%282017%29.svg.png",
            title: `Mooncascade Youtube profile`,
            buttonText: "Open",
            buttonUrl:
              "https://www.youtube.com/channel/UCdmwrQk8MBdN-eVpVw_MQ0Q"
          })
        );
        break;
    }
  } else {
    agent.add(
      "You can contact us via email: info@mooncascade.com or reach us at +372 504 5119"
    );
    agent.add(
      "You can also find us on Linkedin, Facebook, Twitter, Instagram and Youtube"
    );
    getRandomSuggestions(
      socialMediaChannels,
      3,
      "Check out our social media channels",
      agent
    );
  }
};
