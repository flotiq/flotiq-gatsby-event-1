import React from 'react';
import { Header } from 'flotiq-components-react';

const HeroSection = ({ heroBackgroundImage, headerText, subheaderText }) => (
    <div
        className="flex flex-col items-center justify-center bg-cover bg-no-repeat px-4 py-10 lg:py-36"
        style={{ backgroundImage: `url('${heroBackgroundImage}')` }}
    >
        <Header
            additionalClasses={['font-inter text-white tracking-widest !p-0 !text-3xl md:!text-6xl']}
        >
            {headerText}
        </Header>
        <Header
            additionalClasses={['text-white tracking-widest !text-base md:!text-xl !font-normal !p-0 mt-2 md:mt-5']}
        >
            {subheaderText}
        </Header>
    </div>
);

export default HeroSection;
