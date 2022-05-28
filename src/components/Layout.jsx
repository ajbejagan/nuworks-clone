import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

const Layout = ({ children }) => {
    const [ showOnScroll, setShowOnScroll ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const location = useLocation();
    console.log(location);
    const isHome = location.pathname === '/' ? true : false;

    useEffect(()=> {
        if (location.hash) {
            const pageSection = document.getElementById(location.hash.slice(1))
            if (pageSection) {
                pageSection.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top:0,left:0, behavior: "smooth"})
        }

        setIsOpen(false);
    }, [location])

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