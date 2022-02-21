import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lora', ...additionalClass].join(' ')}>
        {children}
        <Footer />
    </main>
);

export default Layout;
