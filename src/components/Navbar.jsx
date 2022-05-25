import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nuworks-logo-white.png';
import hamburgerIcon from '../assets/hamburger-icon.png';

const Navbar = () => {
    return (
        <nav className="bg-[#ccc] fixed top-0 w-full z-50 px-4 py-2">
            <div className="flex flex-wrap items-center justify-between px-[15px]">
                <Link className="py-[.3125rem] xl:mx-[20px] xl:my-[10px]" to="/">
                    <img className="w-[80%]" src={logo} alt="Nuworks logo" />
                </Link>
                <button className="flex justify-end">
                    <img className="w-[80%]" src={hamburgerIcon} alt="Navigation button" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;