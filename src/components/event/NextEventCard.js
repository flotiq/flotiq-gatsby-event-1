import React from 'react';
import { Card } from 'flotiq-components-react';

const NextEventCard = ({ name, headerImage, date, onClick }) => (
    <Card
        vertical
        onClick={onClick}
        bordered={false}
        rounded="none"
        additionalClasses={['flex-nowrap flex-col cursor-pointer']}
    >
        <Card.Img
            src={headerImage}
            alt={name}
            additionalClasses={['w-full h-full !basis-auto']}
        />
        <Card.Body additionalClasses={['flex flex-col justify-between border border-gray pb-5']}>
            <Card.Title additionalClasses={['uppercase !text-xl mb-5']}>
                {name}
            </Card.Title>
            <p>
                {date}
            </p>
        </Card.Body>
    </Card>
);

export default NextEventCard;
