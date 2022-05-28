import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

const Layout = ({ children }) => {
    const [ showOnScroll, setShowOnScroll ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const currentPage = useLocation();
    const isHome = currentPage.pathname === '/' ? true : false;

    useEffect(() => {
        setIsOpen(false)
    }, [currentPage.pathname]);

    useEffect(() => {
        document.body.classList = `relative ${ isHome ? 'bg-siteHomeBg' : 'bg-siteBg lg:bg-siteHomeBg'} bg-[#1B1B1B] bg-no-repeat bg-cover bg-fixed w-full min-h-full max-h-full overflow-x-hidden`;
    }, [isHome])

    const trackScroll = () => {
        if (window.scrollY >= 80.39) {
            setShowOnScroll(true);
        } else {
            setShowOnScroll(false);
        }
    }

    window.addEventListener('scroll', trackScroll);

    return (
        <>
            <Navbar isHome={isHome} showOnScroll={showOnScroll} isOpen={isOpen} setIsOpen={setIsOpen} />
            {children}
            <Footer />
            <FloatingCTA />
        </>
    )
}

export default Layout;