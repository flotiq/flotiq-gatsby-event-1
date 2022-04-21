import React from 'react';
import { Card, Paragraph } from 'flotiq-components-react';

const EventDescriptionCard = ({ name, headerImage, date, description }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['w-full flex flex-col mb-10 my-10 rounded-lg']}
    >
        <Card.Img
            src={headerImage}
            alt={name}
            additionalClasses={['w-full']}
        />
        <Card.Body
            additionalClasses={[
                'grid grid-cols-4 border-2 border-blue !p-0 rounded-b-lg',
            ]}
        >
            <div className="pt-24 pb-12">
                <p className="flex items-start justify-center h-full border-r-2 border-gray text-lg px-5 md:px-0">
                    {date.replace('T', ' ')}
                </p>
            </div>
            <div className="col-span-3 py-10 px-5 md:px-10">
                <Card.Title additionalClasses={['font-normal mt-5 mb-8']}>
                    {name}
                </Card.Title>
                <Paragraph>{description}</Paragraph>
            </div>
        </Card.Body>
    </Card>
);

export default EventDescriptionCard;
