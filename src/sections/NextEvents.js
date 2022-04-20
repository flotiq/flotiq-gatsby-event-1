import React from 'react';
import { navigate } from 'gatsby';
import { Header } from 'flotiq-components-react';
import NextEventCard from '../components/event/NextEventCard';
import NextEventsNavigation from '../components/event/NextEventsNavigation';

const NextEvents = ({ events, headerText, pageContext, additionalClass }) => (
    <div className={['max-w-7xl mx-auto px-2 sm:px-6 lg:px-8', ...additionalClass].join(' ')}>
        <Header additionalClasses={['!font-light mb-5 !text-3xl']}>
            {headerText}
        </Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {events.map((event) => (
                <NextEventCard
                    key={event.id}
                    onClick={() => { navigate(`/${event.slug}`); }}
                    headerImage={event.image[0] && event.image[0].localFile.publicURL}
                    name={event.name}
                    date={event.date}
                    slug={event.slug}
                />
            ))}
        </div>
        <NextEventsNavigation
            additionalClass={['mt-5']}
            prevText="Previous event"
            nextText="Next event"
            pageContext={pageContext}
        />
    </div>
);

export default NextEvents;
