const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const singleEvent = path.resolve('./src/templates/event.js');
  const result = await graphql(`
        query GetEvents {
            allEvent(sort: {order: ASC, fields: date}) {
                edges {
                    node {
                        id
                        name
                        slug
                        image {
                            extension
                            id
                        }
                        address
                        date
                        price
                        description
                        excerpt
                        gallery {
                            localFile {
                              publicURL
                            }
                        }
                    }
                }
            }
        }
`);

  if (result.errors) {
    throw result.errors;
  }
  const events = result.data.allEvent.edges;

  // Create paginated index
  const eventsPerPage = 7;
  const numPages = Math.ceil(events.length / eventsPerPage);

  Array.from({ length: numPages }).forEach((item, i) => {
    createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: path.resolve('./src/templates/index.js'),
      context: {
        limit: eventsPerPage,
        skip: i * eventsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create events pages.
  events.forEach((event, index) => {
    const previous = index === events.length - 1 ? null : events[index + 1].node;
    const next = index === 0 ? null : events[index - 1].node;

    createPage({
      path: event.node.slug,
      component: singleEvent,
      context: {
        slug: event.node.slug,
        previous,
        next,
      },
    });
  });
};
