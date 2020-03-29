const {
  BrowseCarousel,
  BrowseCarouselItem,
  Image
} = require("actions-on-google");

module.exports = (agent, itemsData) => {
  let conv = agent.conv();

  const items = itemsData.map(item => {
    return new BrowseCarouselItem({
      title: item.title,
      url: item.url,
      description: item.description,
      image: new Image({
        url: item.image,
        alt: item.alt
      }),
      footer: item.footer
    });
  });

  if (items.length === 0) {
    conv.ask(
      `Sorry, I haven't found anything related to this topic on our blog`
    );
  } else {
    conv.ask(`Ok, here are our latest blog posts in this topic`);
    conv.ask(
      new BrowseCarousel({
        items: items
      })
    );
  }

  agent.add(conv);
};
