import { useEffect, useContext } from 'react';
import Heading from '../assets/join-the-team-heading.png';
import googlePartnerBadge from '../assets/google-partner-badge.png';
import fbMarketingPartnerBadge from '../assets/fb-marketing-partner-badge.png';
import {
    fbIcon,
    linkedInIcon,
    igIcon,
    twitterIcon,
    ytIcon
} from '../assets/icons';
import { ApplicantContext } from '../App';

const ResultField = (props) => {
    const {label, value} = props;
    
    return (
        <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
            <p className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2">
                {label}
            </p>
            <p className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5">
                {value}
            </p>
        </div>
    )
}

const JoinTheTeamResult = () => {
    const {applicantFormData} = useContext(ApplicantContext);
    const {applicantName, position, number, email, hearAboutUs, referralPerson} = applicantFormData;

    useEffect(() => {
        document.title = "Applicant's Data";
    }, [])

    return (
        <div className="flex-1 w-full my-[100px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col lg:flex-row md:items-start -mx-[15px]">
                    <div className="w-full lg:max-w-1/2 px-[15px]">
                        <img className="w-[200px] h-auto" src={Heading} alt="Join us" />
                        <p className="w-[90%] text-[14px] text-white font-medium leading-[20px] mt-[20px] mb-[30px]">
                            We are always on the lookout for budding and seasoned talent. Let’s see if there’s a fit and let’s get meaningful stuff done!
                        </p>
                        <div className="flex items-center lg:mb-[150px]">
                            <a className="mr-[10px]" href="https://www.google.com/partners/agency?id=2893686766" target="_blank" rel="noreferrer">
                                <img className="w-[110px] h-auto" src={googlePartnerBadge} alt="Google Partner Badge" />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <img className="w-[105px] h-auto" src={fbMarketingPartnerBadge} alt="Facebook Marketing Partner Badge" />
                            </a>
                        </div>
                        <hr className="border-b w-[90%] my-4" />
                        <div className="mt-[30px] mb-[10px]">
                            <p className="text-[14px] text-white leading-[20px]">Unit 3801, 38th floor One Corporate Centre</p>
                            <p className="text-[14px] text-white leading-[20px]">Doña Julia Vargas Ave. corner Meralco Ave.</p>
                            <p className="text-[14px] text-white leading-[20px]">Ortigas Center, Pasig City 1605</p>
                        </div>
                        <div className="pt-[20px]">
                            <ul className="flex items-start mb-4">
                                <li className="w-[32px] h-[32px] mr-[8px]">
                                    <a href="https://www.facebook.com/nuworks" target="_blank" rel="noreferrer">
                                        <img src={fbIcon} alt="Nuworks Facebook profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] h-[32px] mx-[8px]">
                                    <a href="https://ph.linkedin.com/company/nuworksph" target="_blank" rel="noreferrer">
                                        <img src={linkedInIcon} alt="Nuworks LinkedIn profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] h-[32px] mx-[8px]">
                                    <a href="https://www.instagram.com/nuworksph/" target="_blank" rel="noreferrer">
                                        <img src={igIcon} alt="Nuworks Instagram profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] h-[32px] mx-[8px]">
                                    <a href="https://twitter.com/nuworksph" target="_blank" rel="noreferrer">
                                        <img src={twitterIcon} alt="Nuworks Twitter profile link" />
                                    </a>
                                </li>
                                <li className="w-[32px] h-[32px] mx-[8px]">
                                    <a href="https://www.youtube.com/c/NuWorksInteractiveLabsIncPasig" target="_blank" rel="noreferrer">
                                        <img src={ytIcon} alt="Nuworks YouTube profile link" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-1/2 px-[15px]">
                        <div className="mt-[70px] lg:mt-0">
                            <form>
                                <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                    <ResultField
                                        label="Name"
                                        value={applicantName ? applicantName : 'Not set'}
                                    />
                                    <ResultField
                                        label="Position"
                                        value={position ? position : 'Not set'}
                                    />
                                </div>
                                <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                    <ResultField
                                        label="Mobile Number"
                                        value={number ? number : 'Not set'}
                                    />
                                    <ResultField
                                        label="Email Address"
                                        value={email ? email : 'Not set'}
                                    />
                                </div>
                                <div className="flex flex-wrap -mx-[15px]">
                                    <div className="w-full px-[15px]">
                                        <p className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2">
                                            Where did you hear about us?
                                        </p>
                                        <div className="mt-[10px] mb-[20px]">
                                        <p className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5">
                                            {hearAboutUs ? hearAboutUs : 'Not set'}
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                {hearAboutUs === 'Referral' && (
                                    <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                        <ResultField
                                            label="Referral's Name"
                                            value={referralPerson ? referralPerson : 'Not set'}
                                        />
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinTheTeamResult;