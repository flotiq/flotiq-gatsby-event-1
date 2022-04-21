import React from 'react';
import { Header } from 'flotiq-components-react';

const Contact = ({
    ContactBackgroundImage, headerText, subheaderText, nameInputLabel, emailInputLabel, messageInputLabel, buttonLabel,
}) => (
    <div
        className="bg-cover bg-no-repeat px-4 py-20"
        style={{ backgroundImage: `url('${ContactBackgroundImage}')` }}
    >
        <div className="max-w-4xl m-auto grid grid-cols-1 md:grid-cols-2 px-5 sm:px-10 md:px-0">
            <div className="flex flex-col md:pr-10 mb-10 md:mb-0">
                <Header
                    additionalClasses={['font-inter text-white tracking-widest !p-0 !text-4xl md:!text-6xl']}
                >
                    {headerText}
                </Header>
                <Header
                    level={2}
                    additionalClasses={['text-white tracking-widest !text-2xl md:!text-3xl !p-0 mt-4 md:mt-8']}
                >
                    {subheaderText}
                </Header>
            </div>
            <div className="flex justify-end">
                <form
                    action="#"
                    method="POST"
                    className="w-full lg:w-9/12 font-sora font-light flex flex-col
                    space-y-3"
                >
                    <div>
                        <label htmlFor="full-name" className="sr-only">
                            {nameInputLabel}
                        </label>
                        <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            autoComplete="name"
                            className="block w-full p-4 placeholder-primary/25
                    placeholder:font-light placeholder:italic border-0 border-b border-gray"
                            placeholder="Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            {emailInputLabel}
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block w-full p-4 placeholder-primary/25
                    placeholder:font-light placeholder:italic border-0 border-b border-gray"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">
                            {messageInputLabel}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            className="block w-full p-4 placeholder-primary/25
                     placeholder:font-light placeholder:italic border-0 border-b border-gray"
                            placeholder="Message"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-10 text-base
                         font-light text-white bg-secondary"
                    >
                        {buttonLabel}
                    </button>
                </form>
            </div>
        </div>
    </div>
);

export default Contact;
