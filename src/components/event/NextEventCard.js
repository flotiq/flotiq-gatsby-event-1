import React from 'react';
import { Card } from 'flotiq-components-react';
import { Link } from 'gatsby';

const NextEventCard = ({ name, headerImage, date, slug }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['flex-nowrap flex-col cursor-pointer border border-gray pb-5']}
    >
        <Link to={`/${slug}`}>
            <Card.Img
                src={headerImage}
                alt={name}
                additionalClasses={['w-full h-full !basis-auto']}
            />
            <Card.Body additionalClasses={['flex flex-col justify-between']}>
                <Card.Title additionalClasses={['uppercase !text-xl mb-5']}>
                    {name}
                </Card.Title>
                <p>
                    {date.replace('T', ' ')}
                </p>
            </Card.Body>
        </Link>
    </Card>
);

export default NextEventCard;
