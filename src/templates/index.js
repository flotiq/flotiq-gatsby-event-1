import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import HeroSection from '../sections/HeroSection';
import HeroSectionBgImage from '../assets/hero-bg.jpg';
import Calendar from '../components/Calendar';
import NextMonthsNavigation from '../components/NextMonthsNavigation';

/**
 * Content of index page
 */
const IndexPage = ({ data, pageContext }) => {
    const { events, month, firstDay, currentPage, numPages } = pageContext;
    return (
        <Layout additionalClass={['bg-white']}>
            {/* Content of <head> tag */}
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={data.site.siteMetadata.description}
                />
            </Helmet>
            <HeroSection
                heroBackgroundImage={HeroSectionBgImage}
                headerText="Flotiq Webinars"
                subheaderText="The Power or APIs"
            />
            <Calendar
                additionalClass={['my-5']}
                currentMonthYear={month}
                events={events}
                firstDay={firstDay}
            />
            <NextMonthsNavigation page={currentPage} numOfPages={numPages} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

export default IndexPage;
