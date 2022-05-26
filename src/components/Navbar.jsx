import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nuworks-logo-white.png';
import hamburgerIcon from '../assets/hamburger-icon.png';
import fbIcon from '../assets/icons/nu-fb-icon.svg';
import linkedInIcon from '../assets/icons/nu-linkedin-icon.svg';
import igIcon from '../assets/icons/nu-ig-icon.svg';
import twitterIcon from '../assets/icons/nu-twitter-icon.svg';
import ytIcon from '../assets/icons/nu-yt-icon.svg';
import googlePartnerBadge from '../assets/google-partner-badge.png';
import fbMarketingPartnerBadge from '../assets/fb-marketing-partner-badge.png';

const Navbar = () => {
    const [ showOnScroll, setShowOnScroll ] = useState(false);
    const [ isToggled, setIsToggled ] = useState(false);

    const trackScroll = () => {
        if (window.scrollY >= 80.39) {
            setShowOnScroll(true);
        } else {
            setShowOnScroll(false);
        }
    }

    window.addEventListener('scroll', trackScroll);

    const toggle = () => setIsToggled(!isToggled);

    return (
        <>
            <header className={`${ showOnScroll ? "bg-navbarBg shadow-[0_4px_20px_rgb(0,0,0,0.61)]" : "bg-transparent"} fixed top-0 w-full z-50 px-4 py-2`}>
                <div className="flex flex-wrap items-center justify-between px-[15px]">
                    <Link className="py-[.3125rem] xl:mx-[20px] xl:my-[10px]" to="/">
                        <img className={`${ showOnScroll ? "opacity-100" : "opacity-0" } w-[80%]`} src={logo} alt="Nuworks logo" />
                    </Link>
                    <button className="flex justify-end" onClick={toggle}>
                        <img className="w-[80%]" src={hamburgerIcon} alt="Navigation button" />
                    </button>
                </div>
            </header>
            <sidebar className={`${isToggled ? "block" : "hidden"} fixed top-0 right-0 bottom-0 left-0 w-full lg:w-[30%] h-full bg-[#F6C900] ml-auto opacity-[1] z-50`}>
                <div className="relative flex flex-col justify-between h-full">
                    <div className="flex justify-end w-full pr-[50px] mt-[30px]">
                        <button
                            className="text-[36px] text-[#434343] font-semibold leading-[24px] dro26shadow-[0_1px_0_#FFFFFF] opacity-50 hover:opacity-75"
                            onClick={() => setIsToggled(false)}
                        >
                            X
                        </button>
                    </div>
                    <nav className="pl-[40px]">
                        <ul>
                            <li className="my-[20px]">
                                <p className="text-[24px] text-[#434343] font-semibold uppercase leading-[32px]">Our Services</p>
                            </li>
                            <li className="my-[20px]">
                                <p className="text-[24px] text-[#434343] font-semibold uppercase leading-[32px]">Our Work</p>
                            </li>
                            <li className="my-[20px]">
                                <p className="text-[24px] text-[#434343] font-semibold uppercase leading-[32px]">About Nuworks</p>
                            </li>
                            <li className="my-[20px]">
                                <p className="text-[24px] text-[#434343] font-semibold uppercase leading-[32px]">Be One of Us</p>
                            </li>
                            <li className="my-[20px]">
                                <p className="text-[24px] text-[#434343] font-semibold uppercase leading-[32px]">Let's Connect</p>
                            </li>
                        </ul>
                    </nav>
                    <div className="px-[40px] mb-[20px]">
                        <div className="flex items-center">
                            <a className="mr-[10px]" href="https://www.google.com/partners/agency?id=2893686766" target="_blank">
                                <img className="w-[110px] h-auto" src={googlePartnerBadge} alt="Google Partner Badge" />
                            </a>
                            <a href="#" target="_blank">
                                <img className="w-[100px] h-auto" src={fbMarketingPartnerBadge} alt="Facebook Marketing Partner Badge" />
                            </a>
                        </div>
                        <div className="pt-[20px]">
                            <ul className="flex items-start mb-4">
                                <li className="w-[24px] h-[26px] mr-[8px]">
                                    <a href="https://www.facebook.com/nuworks" target="_blank">
                                        <img src={fbIcon} alt="Nuworks Facebook profile link" />
                                    </a>
                                </li>
                                <li className="w-[24px] h-[26px] mx-[8px]">
                                    <a href="https://ph.linkedin.com/company/nuworksph" target="_blank">
                                        <img src={linkedInIcon} alt="Nuworks LinkedIn profile link" />
                                    </a>
                                </li>
                                <li className="w-[24px] h-[26px] mx-[8px]">
                                    <a href="https://www.instagram.com/nuworksph/" target="_blank">
                                        <img src={igIcon} alt="Nuworks Instagram profile link" />
                                    </a>
                                </li>
                                <li className="w-[24px] h-[26px] mx-[8px]">
                                    <a href="https://twitter.com/nuworksph" target="_blank">
                                        <img src={twitterIcon} alt="Nuworks Twitter profile link" />
                                    </a>
                                </li>
                                <li className="w-[24px] h-[26px] mx-[8px]">
                                    <a href="https://www.youtube.com/c/NuWorksInteractiveLabsIncPasig" target="_blank">
                                        <img src={ytIcon} alt="Nuworks YouTube profile link" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="xl:mr-[30px]">
                            <Link className="text-normal text-[#434343] underline underline-offset-4" to="/terms-and-conditions">Terms and Conditions</Link>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link className="text-normal text-[#434343] underline underline-offset-4" to="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </sidebar>
        </>
    )
}

export default Navbar;