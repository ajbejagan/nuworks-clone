import React from 'react';
import { Link } from 'react-router-dom';
import fbIcon from '../assets/icons/nu-fb-icon.svg';
import linkedInIcon from '../assets/icons/nu-linkedin-icon.svg';
import igIcon from '../assets/icons/nu-ig-icon.svg';
import twitterIcon from '../assets/icons/nu-twitter-icon.svg';
import ytIcon from '../assets/icons/nu-yt-icon.svg';

const Footer = () => {
    return (
        <footer className="bg-[#CCCCCC] shrink-0 mt-[50px]">
            <div className="px-[20px] py-[10px]">
                <div className="xl:flex xl:flex-row-reverse w-full xl:max-w-[1140px] px-[15px] mx-auto">
                    <div className="xl:flex xl:flex-row-reverse xl:items-center w-full xl:max-w-[58.333333%]">
                        <div className="pt-[20px]">
                            <ul className="flex items-start mb-4">
                                <li className="w-[32px] h-[34px] mr-[8px]">
                                    <a href="https://www.facebook.com/nuworks" target="_blank">
                                        <img src={fbIcon} alt="Nuworks Facebook profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] xl:w-[34px] h-[34px] mx-[8px]">
                                    <a href="https://ph.linkedin.com/company/nuworksph" target="_blank">
                                        <img src={linkedInIcon} alt="Nuworks LinkedIn profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] h-[34px] mx-[8px]">
                                    <a href="https://www.instagram.com/nuworksph/" target="_blank">
                                        <img src={igIcon} alt="Nuworks Instagram profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] h-[34px] mx-[8px]">
                                    <a href="https://twitter.com/nuworksph" target="_blank">
                                        <img src={twitterIcon} alt="Nuworks Twitter profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] h-[34px] mx-[8px]">
                                    <a href="https://www.youtube.com/c/NuWorksInteractiveLabsIncPasig" target="_blank">
                                        <img src={ytIcon} alt="Nuworks YouTube profile link" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="xl:mr-[30px]">
                            <Link className="text-[13px] xl:text-[16px] text-[#1E1D1D] underline underline-offset-4 tracking-[.02em]" to="/terms-and-conditions">Terms and Conditions</Link>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link className="text-[13px] xl:text-[16px] text-[#1E1D1D] underline underline-offset-4 tracking-[.02em]" to="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="xl:flex xl:items-center xl:justify-center w-full xl:max-w-[41.666667%] pt-[20px] xl:pt-0 xl:px-[15px]">
                        <span className="text-[10px] xl:text-[14px] text-[#1E1D1D]">Copyright 2021. NuWorks Interactive Labs, Inc. All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;