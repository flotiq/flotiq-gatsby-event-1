import React from 'react';
import { Card } from 'flotiq-components-react';

const NextEventCard = ({ name, headerImage, date, onClick }) => (
    <Card
        vertical
        onClick={onClick}
        bordered={false}
        rounded="none"
        additionalClasses={['flex flex-col cursor-pointer']}
    >
        <Card.Img
            src={headerImage}
            alt={name}
            additionalClasses={['w-full']}
        />
        <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <p>
                {date}
            </p>
        </Card.Body>
    </Card>
);

export default NextEventCard;
