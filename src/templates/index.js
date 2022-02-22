import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import HeroSection from '../sections/hero-section';
import HeroSectionBgImage from '../assets/hero-bg.jpg';
import Calendar from '../components/Calendar';

const IndexPage = ({ data }) => {
    const events = data.allEvent.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby event starter</title>
            </Helmet>
            <HeroSection
                heroBackgroundImage={HeroSectionBgImage}
                headerText="Flotiq Webinars"
                subheaderText="The Power or APIs"
            />
            <Calendar additionalClass={['my-5']} currentMonthYear="January 2022" currentDay="01" />
            {events.map((event) => (
                <a href={`/${event.slug}`}><p key={event.id}>{event.name}</p></a>
            ))}
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allEvent(sort: {fields: date, order: ASC}, limit: $limit, skip: $skip,) {
            nodes {
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
                gallery {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;

export default IndexPage;
