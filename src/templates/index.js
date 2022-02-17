import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import Calendar from '../components/Calendar';

const IndexPage = ({ data }) => {
    const events = data.allEvent.nodes;
    return (
        <Layout additionalClass={['bg-white']}>
            <Helmet>
                <title>Flotiq Gatsby event starter</title>
            </Helmet>
            <Calendar additionalClass={['my-5']} currentMonthYear="January 2022" currentDay="01" />
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
