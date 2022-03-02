import React from 'react';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { Link } from 'gatsby';

const NextMonthsNavigation = ({ additionalClass = [], page, numOfPages }) => (
    <nav className={['max-w-7xl mx-auto grid grid-cols-2 '
    + 'lg:grid-cols-3 gap-4', ...additionalClass].join(' ')}
    >
        {page > 1 ? (
            <div className="col-start-1 col-end-2 bg-white border border-gray">
                <Link
                    to={`/${page === 2 ? '' : page - 1}`}
                    className="flex items-center justify-center text-sm md:text-lg font-medium px-2 md:px-5 py-3 w-full"
                >
                    <ArrowNarrowLeftIcon className="mr-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
                    Previous month with events
                </Link>
            </div>
        ) : (<div className="col-start-1 col-end-2" />)}
        {page < numOfPages && (
            <div className="lg:col-start-3 xl:col-start-4 bg-white border border-gray">
                <Link
                    to={`/${page + 1}`}
                    className="flex items-center justify-center text-sm md:text-lg font-medium px-2 md:px-5 py-3 w-full"
                >
                    Next month with events
                    <ArrowNarrowRightIcon className="ml-2 h-5 md:h-7 w-5 md:w-7" aria-hidden="true" />
                </Link>
            </div>
        )}
    </nav>
);

export default NextMonthsNavigation;
