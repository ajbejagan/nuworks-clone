import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

const Layout = ({ children }) => {
    const [ showOnScroll, setShowOnScroll ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const trackScroll = () => {
        if (window.scrollY >= 80.39) {
            setShowOnScroll(true);
        } else {
            setShowOnScroll(false);
        }
    }

    window.addEventListener('scroll', trackScroll);

    return (
        <div className={`relative bg-siteBg bg-[#1B1B1B] bg-no-repeat bg-cover bg-fixed min-h-full max-h-full overflow-hidden`}>
            <Navbar showOnScroll={showOnScroll} isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
            <Footer />
            <FloatingCTA />
        </div>
    )
}

export default Layout;