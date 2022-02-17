import React from 'react';
import { ClockIcon } from '@heroicons/react/solid';
import { Header } from 'flotiq-components-react';

const days = [
    { date: '2021-12-27', events: [] },
    { date: '2021-12-28', events: [] },
    { date: '2021-12-29', events: [] },
    { date: '2021-12-30', events: [] },
    { date: '2021-12-31', events: [] },
    { date: '2022-01-01', isCurrentMonth: true, events: [] },
    { date: '2022-01-02', isCurrentMonth: true, events: [] },
    {
        date: '2022-01-03',
        isCurrentMonth: true,
        hasEvents: true,
        events: [
            { id: 1, name: 'Design review', time: '10AM', datetime: '2022-01-03T10:00', href: '#' },
            { id: 2, name: 'Sales meeting', time: '2PM', datetime: '2022-01-03T14:00', href: '#' },
        ],
    },
    { date: '2022-01-04', isCurrentMonth: true, events: [] },
    { date: '2022-01-05', isCurrentMonth: true, events: [] },
    { date: '2022-01-06', isCurrentMonth: true, events: [] },
    {
        date: '2022-01-07',
        isCurrentMonth: true,
        hasEvents: true,
        events: [{ id: 3, name: 'Party night', time: '6PM', datetime: '2022-01-08T18:00', href: '#' }],
    },
    { date: '2022-01-08', isCurrentMonth: true, events: [] },
    { date: '2022-01-09', isCurrentMonth: true, events: [] },
    { date: '2022-01-10', isCurrentMonth: true, events: [] },
    { date: '2022-01-11', isCurrentMonth: true, events: [] },
    {
        date: '2022-01-12',
        isCurrentMonth: true,
        isToday: true,
        hasEvents: true,
        events: [{ id: 6, name: 'Birthday party', time: '2PM', datetime: '2022-01-25T14:00', href: '#' }],
    },
    { date: '2022-01-13', isCurrentMonth: true, events: [] },
    { date: '2022-01-14', isCurrentMonth: true, events: [] },
    { date: '2022-01-15', isCurrentMonth: true, events: [] },
    { date: '2022-01-16', isCurrentMonth: true, events: [] },
    { date: '2022-01-17', isCurrentMonth: true, events: [] },
    { date: '2022-01-18', isCurrentMonth: true, events: [] },
    { date: '2022-01-19', isCurrentMonth: true, events: [] },
    { date: '2022-01-20', isCurrentMonth: true, events: [] },
    { date: '2022-01-21', isCurrentMonth: true, events: [] },
    {
        date: '2022-01-22',
        isCurrentMonth: true,
        hasEvents: true,
        isSelected: true,
        events: [
            { id: 4, name: 'Museum visit', time: '3PM', datetime: '2022-01-22T15:00', href: '#' },
            { id: 5, name: 'Football game', time: '7PM', datetime: '2022-01-22T19:00', href: '#' },
        ],
    },
    { date: '2022-01-23', isCurrentMonth: true, events: [] },
    { date: '2022-01-24', isCurrentMonth: true, events: [] },
    { date: '2022-01-25', isCurrentMonth: true, events: [] },
    { date: '2022-01-26', isCurrentMonth: true, events: [] },
    { date: '2022-01-27', isCurrentMonth: true, events: [] },
    { date: '2022-01-28', isCurrentMonth: true, events: [] },
    { date: '2022-01-29', isCurrentMonth: true, events: [] },
    { date: '2022-01-30', isCurrentMonth: true, events: [] },
    { date: '2022-01-31', isCurrentMonth: true, events: [] },
    { date: '2022-02-01', events: [] },
    { date: '2022-02-02', events: [] },
    {
        date: '2022-02-03',
        events: [{ id: 7, name: 'Cinema with friends', time: '9PM', datetime: '2022-02-04T21:00', href: '#' },
            { id: 8, name: 'Drinks with friends', time: '9PM', datetime: '2022-02-04T21:00', href: '#' }],
    },
    { date: '2022-02-04', events: [] },
    { date: '2022-02-05', events: [] },
    { date: '2022-02-06', events: [] },
];

const selectedDay = days.find((day) => day.isSelected);

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Calendar = ({ additionalClass, currentMonthYear, currentDay }) => (
    <div className={['max-w-7xl mx-auto', ...additionalClass].join(' ')}>
        <div className="flex items-end justify-between text-red pb-10">
            <Header className="font-normal text-2xl md:text-3xl" text={currentMonthYear} />
            <Header className="font-normal text-5xl md:text-6xl" level={2} text={currentDay} />
        </div>
        <div className="lg:flex lg:h-full lg:flex-col">
            <div className="lg:flex lg:flex-auto lg:flex-col">

                <div className="grid grid-cols-7 gap-px text-center text-base font-normal leading-6 lg:flex-none">
                    <div className="bg-white py-2">
                        MO
                    </div>
                    <div className="bg-white py-2">
                        TU
                    </div>
                    <div className="bg-white py-2">
                        WE
                    </div>
                    <div className="bg-white py-2">
                        TH
                    </div>
                    <div className="bg-white py-2">
                        FR
                    </div>
                    <div className="bg-white py-2 text-red">
                        SAT
                    </div>
                    <div className="bg-white py-2 text-red">
                        SUN
                    </div>
                </div>

                <div className="flex ring-1 ring-gray text-base leading-6 lg:flex-auto">
                    <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                        {days.map((day) => (
                            <div
                                key={day.date}
                                className={classNames(
                                    day.isCurrentMonth ? 'flex bg-white' : 'bg-light-gray/[.4] text-gray',
                                    'relative p-3 ring-1 ring-gray',
                                    day.hasEvents ? '!bg-secondary text-white' : 'bg-white',
                                )}
                            >
                                <time
                                    dateTime={day.date}
                                    className={classNames(
                                        day.isToday
                                            ? 'flex h-10 w-10 p-1 items-center justify-center '
                                            + 'text-2xl border-2 rounded-full'
                                            : 'text-2xl border-2 rounded-full border-transparent',
                                        day.isToday && day.hasEvents ? 'text-white' : undefined,
                                    )}
                                >
                                    {day.date.split('-').pop().replace(/^0/, '')}
                                </time>
                                {day.events.length > 0 && (
                                    <ol className="pl-4">
                                        {day.events.map((event) => (
                                            <li key={event.id} className="pb-3">
                                                <a href={event.href} className="group flex flex-col">
                                                    <time
                                                        dateTime={event.datetime}
                                                        className="hidden flex-none xl:block italic text-xs"
                                                    >
                                                        {event.time}
                                                    </time>
                                                    <p className="flex-auto font-semibold text-sm">
                                                        {event.name}
                                                    </p>
                                                </a>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                        {days.map((day) => (
                            <button
                                key={day.date}
                                type="button"
                                className={classNames(
                                    day.isCurrentMonth
                                        ? 'bg-white'
                                        : 'bg-light-gray text-gray',
                                    (day.isSelected || day.isToday) && 'font-semibold',
                                    day.isSelected && 'text-white border-2 border-dark-blue',
                                    day.hasEvents ? '!bg-secondary text-white' : 'bg-white',
                                    'flex h-14 flex-col p-1 ring-1 ring-gray leading-none',
                                )}
                            >
                                <time
                                    dateTime={day.date}
                                    className={classNames(
                                        day.isToday ? 'border-2 rounded-full' : 'border-transparent',
                                        'flex items-center justify-center h-7 w-7 text-sm',
                                    )}
                                >
                                    {day.date.split('-').pop().replace(/^0/, '')}
                                </time>
                                <p className="sr-only">
                                    {day.events.length}
                                    {' '}
                                    events
                                </p>
                                {day.events.length > 0 && (
                                    <div className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                                        {day.events.map((event) => (
                                            <div
                                                key={event.id}
                                                className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                            />
                                        ))}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {selectedDay?.events.length > 0 && (
                <div className="py-10 px-4 sm:px-6 lg:hidden">
                    <ol className="space-y-3 overflow-hidden bg-white text-sm">
                        {selectedDay.events.map((event) => (
                            <li
                                key={event.id}
                                className="group flex p-4 pr-6 border border-gray hover:border-secondary"
                            >
                                <div className="flex-auto">
                                    <p className="font-semibold text-lg">{event.name}</p>
                                    <time dateTime={event.datetime} className="mt-2 flex items-center italic">
                                        <ClockIcon className="mr-2 h-5 w-5 text-secondary" aria-hidden="true" />
                                        {event.time}
                                    </time>
                                </div>
                                <a
                                    href={event.href}
                                    className="ml-6 flex-none self-center bg-secondary py-2 px-3
                                    font-semibold text-white opacity-0 focus:opacity-100 group-hover:opacity-100"
                                >
                                    Edit
                                    <span className="sr-only">
                                        ,
                                        {event.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    </div>
);

export default Calendar;
