import React, { useEffect, useState } from 'react';
import { ClockIcon } from '@heroicons/react/solid';
import { Header } from 'flotiq-components-react';
import { Link } from 'gatsby';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
// https://stackoverflow.com/a/27947860/17778939
function getDaysInMonth(m, y) {
    // eslint-disable-next-line no-bitwise,no-nested-ternary,no-mixed-operators
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
}

const Calendar = ({ additionalClass, currentMonthYear, events, firstDay }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [days, setDays] = useState([]);
    const [weeksCountClass, setWeeksCountClass] = useState('');
    useEffect(() => {
        const firstDayDate = new Date(firstDay);
        const today = new Date();
        const todaysDate = `${today.getFullYear()
        }-${(today.getMonth() + 1).toString().padStart(2, '0')
        }-${today.getDate().toString().padStart(2, '0')}`;
        let weekDay = firstDayDate.getDay();
        if (weekDay === 0) {
            weekDay = 7;
        }
        weekDay -= 1;
        const tmpDays = [];
        // eslint-disable-next-line no-plusplus
        for (let i = weekDay; i > 0; i--) {
            tmpDays.push({
                date: '',
                events: [],
                key: i,
                isCurrentMonth: false,
            });
        }
        const numOfDaysInMonth = getDaysInMonth(firstDayDate.getMonth() + 1, firstDayDate.getFullYear());
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < numOfDaysInMonth; i++) {
            const date = `${firstDayDate.getFullYear()
            }-${(firstDayDate.getMonth() + 1).toString().padStart(2, '0')
            }-${(i + 1).toString().padStart(2, '0')}`;
            const thisDayEvents = events.filter(
                (event) => new Date(event.date.split('T')[0]).toString() === new Date(date).toString(),
            );
            tmpDays.push({
                date,
                events: thisDayEvents,
                key: date,
                isCurrentMonth: true,
                isToday: todaysDate === date,
            });
        }
        const lastDayDate = new Date(`${firstDayDate.getFullYear()
        }-${(firstDayDate.getMonth() + 1).toString().padStart(2, '0')
        }-${numOfDaysInMonth}`);
        weekDay = lastDayDate.getDay();
        if (weekDay === 0) {
            weekDay = 7;
        }
        weekDay -= 1;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 6 - weekDay; i++) {
            tmpDays.push({
                date: '',
                events: [],
                key: i + 30,
                isCurrentMonth: false,
            });
        }
        setDays(tmpDays);
        const weeksCount = tmpDays.length / 7;
        switch (weeksCount) {
        case 4: setWeeksCountClass('lg:grid-rows-4'); break;
        case 5: setWeeksCountClass('lg:grid-rows-5'); break;
        case 6: setWeeksCountClass('lg:grid-rows-6'); break;
        default: setWeeksCountClass('lg:grid-rows-6'); break;
        }
    }, [events, firstDay]);
    return (
        <div className={['max-w-7xl mx-auto', ...additionalClass].join(' ')}>
            <div className="flex items-end justify-between text-red pb-10">
                <Header className="font-normal text-2xl md:text-3xl">
                    {currentMonthYear}
                </Header>
                <Header className="font-normal text-5xl md:text-6xl" level={2}>
                    {(new Date(firstDay).getMonth() + 1).toString().padStart(2, '0')}
                </Header>
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
                        <div className={`hidden w-full lg:grid lg:grid-cols-7 lg:gap-px ${weeksCountClass}`}>
                            {days.map((day) => (
                                <div
                                    key={day.key}
                                    className={classNames(
                                        day.isCurrentMonth ? 'flex bg-white' : 'bg-light-gray/[.4] text-gray',
                                        'relative p-3 ring-1 ring-gray',
                                        day.events.length > 0 ? '!bg-secondary text-white' : 'bg-white',
                                    )}
                                >
                                    <time
                                        dateTime={day.date}
                                        className={classNames(
                                            day.isToday
                                                ? 'flex h-10 w-10 p-1 items-center justify-center '
                                                + 'text-2xl border-2 rounded-full'
                                                : 'text-2xl border-2 rounded-full border-transparent',
                                            day.isToday && day.events.length > 0 ? 'text-white' : undefined,
                                        )}
                                    >
                                        {day.date.split('-').pop().replace(/^0/, '')}
                                    </time>
                                    {day.events.length > 0 && (
                                        <ol className="pl-4">
                                            {day.events.map((event) => (
                                                <Link to={`/${event.slug}`} key={event.id}>
                                                    <li className="pb-3 group flex flex-col">
                                                        <time
                                                            dateTime={event.date}
                                                            className="hidden flex-none xl:block italic text-xs"
                                                        >
                                                            {new Date(event.date)
                                                                .getHours().toString().padStart(2, '0')}
                                                            :
                                                            {new Date(event.date)
                                                                .getMinutes().toString().padStart(2, '0')}
                                                        </time>
                                                        <p className="flex-auto font-semibold text-sm">
                                                            {event.name}
                                                        </p>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ol>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                            {days.map((day) => (
                                <button
                                    key={day.key}
                                    type="button"
                                    className={classNames(
                                        day.isCurrentMonth
                                            ? 'bg-white'
                                            : 'bg-light-gray text-gray',
                                        (day.isSelected || day.isToday) && 'font-semibold',
                                        day.isSelected && 'text-white border-2 border-dark-blue',
                                        day.events.length > 0 ? '!bg-secondary text-white' : 'bg-white',
                                        'flex h-14 flex-col p-1 ring-1 ring-gray leading-none',
                                    )}
                                    onClick={() => setSelectedDay(day)}
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
                                        <time dateTime={event.date} className="mt-2 flex items-center italic">
                                            <ClockIcon className="mr-2 h-5 w-5 text-secondary" aria-hidden="true" />
                                            {new Date(event.date)
                                                .getHours().toString().padStart(2, '0')}
                                            :
                                            {new Date(event.date)
                                                .getMinutes().toString().padStart(2, '0')}
                                        </time>
                                    </div>
                                    <Link
                                        to={`/${event.slug}`}
                                        className="ml-6 flex-none self-center bg-secondary
                                        py-2 px-3 font-semibold text-white"
                                    >
                                        Show
                                        <span className="sr-only">
                                            ,
                                            {event.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendar;
