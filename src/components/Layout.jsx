import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className={`relative bg-siteBg bg-[#1B1B1B] bg-no-repeat bg-cover bg-fixed min-h-full max-h-full overflow-hidden`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;