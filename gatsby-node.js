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

    let events = result.data.allEvent.edges;
    // Create events pages.
    events.forEach((event, index) => {
        const next = index === events.length - 1 ? null : events[index + 1].node;
        const previous = index === 0 ? null : events[index - 1].node;

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

    const today = new Date();
    const filterDate = new Date(`${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-01`);
    events = events.filter((event) => new Date(event.node.date) > filterDate);

    let monthSplitEvents = { };
    events.forEach((event) => {
        const month = new Date(event.node.date);
        const monthIndex = `${month.getFullYear()}-${month.getMonth() + 1}`;
        const monthFirstDay = `${month.getFullYear()}-${(month.getMonth() + 1).toString().padStart(2, '0')}-01`;
        const monthName = `${month.toLocaleString('en-us', { month: 'long' })} ${month.getFullYear()}`;
        if (typeof monthSplitEvents[monthIndex] === 'undefined') {
            monthSplitEvents[monthIndex] = {
                name: monthName,
                firstDay: monthFirstDay,
                events: [],
            };
        }
        monthSplitEvents[monthIndex].events.push(event.node);
    });
    monthSplitEvents = Object.values(monthSplitEvents);

    // Create paginated index
    const numPages = monthSplitEvents.length;

    monthSplitEvents.forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                events: item.events,
                month: item.name,
                firstDay: item.firstDay,
                numPages,
                currentPage: i + 1,
            },
        });
    });
};
