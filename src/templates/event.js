import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import NextEvents from '../sections/NextEvents';
import EventDescriptionCard from '../components/EventDescriptionCard';

const EventTemplate = ({ data, pageContext }) => {
    const { event } = data;
    const events = data.allEvent.nodes;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <EventDescriptionCard
                    name={event.name}
                    headerImage={event.image[0] && event.image[0].localFile.publicURL}
                    date={event.date}
                    description={event.description}
                    address={event.address}
                    price={event.price}
                />
            </div>
            <NextEvents
                events={events}
                pageContext={pageContext}
                headerText="Next events:"
                additionalClass={['py-5']}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query EventBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        event( slug: { eq: $slug } ) {
            id
            name
            slug
            image {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            address
            date
            price
            description
            excerpt
            price
            image {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            gallery {
                localFile {
                    publicURL
                }
            }
        }
        allEvent(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 4, filter: {slug: {ne: $slug}}) {
            nodes {
                id
                name
                slug
                address
                date
                excerpt
                price
                image {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    }
`;

export default EventTemplate;
