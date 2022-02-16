import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lora', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
