import React from 'react';
import { Header } from 'flotiq-components-react';

const ContactSection = ({ ContactBackgroundImage, headerText, subheaderText }) => (
    <div
        className="flex flex-col items-center justify-center bg-cover bg-no-repeat px-4 py-10"
        style={{ backgroundImage: `url('${ContactBackgroundImage}')` }}
    >
        <div className="max-w-7xl m-auto">
            <Header
                text={headerText}
                additionalClasses={['font-inter text-white tracking-widest !p-0 !text-3xl md:!text-6xl']}
            />
            <Header
                text={subheaderText}
                level={2}
                additionalClasses={['text-white tracking-widest !text-base md:!text-xl !font-normal !p-0 mt-2 md:mt-5']}
            />

        </div>
    </div>
);

export default ContactSection;
