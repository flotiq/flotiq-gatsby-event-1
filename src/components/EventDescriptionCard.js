import React from 'react';
import { Card, Paragraph } from 'flotiq-components-react';

const EventDescriptionCard = ({ name, headerImage, date, description, address, price }) => (
    <Card
        vertical
        bordered={false}
        rounded="none"
        additionalClasses={['w-full flex flex-col mb-10 my-10']}
    >
        <Card.Img
            src={headerImage}
            alt={name}
            additionalClasses={['w-full']}
        />
        <Card.Body
            additionalClasses={[
                'grid grid-cols-4 border-2 border-blue !p-0',
            ]}
        >
            <div className="pt-24 pb-12 px-10">
                <p className="flex items-start justify-center h-full border-r-2 border-gray">
                    {date}
                </p>
            </div>
            <div className="col-span-3 py-10">
                <Card.Title additionalClasses={['font-normal mt-5 mb-8']}>
                    {name}
                </Card.Title>
                <Paragraph text={description} />
                <div className="mt-10 flex flex-wrap items-center justify-self-end justify-between">
                    <p>{address}</p>
                    <p>{price}</p>
                </div>

            </div>
        </Card.Body>
    </Card>
);

export default EventDescriptionCard;
