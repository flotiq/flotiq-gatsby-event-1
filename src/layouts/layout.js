import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lora', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        {children}
        <Footer />
    </main>
);

export default Layout;
