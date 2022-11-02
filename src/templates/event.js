import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import Contact from '../sections/Contact';
import ContactBackgroundImage from '../assets/hero-bg.jpg';
import NextEvents from '../sections/NextEvents';
import EventDescriptionCard from '../components/EventDescriptionCard';
import EventBackButton from '../components/EventBackButton';

const EventTemplate = ({ data, pageContext }) => {
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const { event } = data;
    const events = data.allEvent.nodes;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{event.name}</title>
                <meta
                    name="description"
                    content={event.description}
                />
            </Helmet>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <EventBackButton additionalClass={['mt-12']} backButtonText="Back to homepage" />
            </div>
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
            <Contact
                headerText="Do you have more questions?"
                subheaderText="Contact us"
                ContactBackgroundImage={ContactBackgroundImage}
                nameInputLabel="Name"
                emailInputLabel="Email"
                messageInputLabel="Message"
                buttonLabel="Send"
            />
        </Layout>
    );
};

/**
 * GraphQL query getting data for the page
 */
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
        allEvent(sort: {fields: date, order: ASC}, limit: 4, filter: {slug: {ne: $slug}}) {
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
