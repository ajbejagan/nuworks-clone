import { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../assets/join-the-team-heading.png';
import googlePartnerBadge from '../assets/google-partner-badge.png';
import fbMarketingPartnerBadge from '../assets/fb-marketing-partner-badge.png';
import uploadIcon from '../assets/upload.png';
import {
    fbIcon,
    linkedInIcon,
    igIcon,
    twitterIcon,
    ytIcon
} from '../assets/icons';

const vacantPositionOptions = [
    {
        'value': 'not set',
        'label': 'Click to see our job openings'
    },
    {
        'value': 'Account Manager',
        'label': 'Account Manager'
    },
    {
        'value': 'Art Director',
        'label': 'Art Director'
    },
    {
        'value': 'Copywriter',
        'label': 'Copywriter'
    },
    {
        'value': 'Creative Director',
        'label': 'Creative Director'
    },
    {
        'value': 'Engagement Executive',
        'label': 'Engagement Executive'
    },
    {
        'value': 'Front end Developer',
        'label': 'Front end Developer'
    },
    {
        'value': 'Fullstack Developer',
        'label': 'Fullstack Developer'
    },
    {
        'value': 'Graphic Designer',
        'label': 'Graphic Designer'
    },
    {
        'value': 'Jr. Account Manager',
        'label': 'Jr. Account Manager'
    },
    {
        'value': 'Media Executive',
        'label': 'Media Executive'
    },
    {
        'value': 'Media Manager',
        'label': 'Media Manager'
    },
    {
        'value': 'Senior Account Manager',
        'label': 'Senior Account Manager'
    },
    {
        'value': 'Senior Analyst',
        'label': 'Senior Analyst'
    },
    {
        'value': 'Senior Copywriter',
        'label': 'Senior Copywriter'
    },
    {
        'value': 'Senior Media Executive',
        'label': 'Senior Media Executive'
    },
    {
        'value': 'Strategist',
        'label': 'Strategist'
    },
    {
        'value': 'Others',
        'label': 'Others'
    }
]

const JoinTheTeam = () => {
    const [formData, setFormData] = useState({
        applicantName: '',
        position: '',
        number: '',
        email: '',
        hearAboutUs: 'Social Media',
        referralPerson: ''
    });

    const isRadioSelected = (value) => formData.hearAboutUs === value

    const onUpdateFormState = (field, value) => {
        // console.log(value);
        setFormData({
            ...formData,
            [field]: value,
        });
        // console.log(formData);
    }

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
                            <form action="#">
                            <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="applicantName"
                                        >
                                            Name
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.applicantName ?? ''}
                                            name="applicantName"
                                            id="applicantName"
                                            onChange={(e) => onUpdateFormState('applicantName', e.target.value)}
                                            maxLength={100}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="position"
                                        >
                                            Position
                                        </label>
                                        <select
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            value={formData.position}
                                            name="position"
                                            id="position"
                                            onChange={(e) => onUpdateFormState('position', e.target.value)}
                                        >
                                            {vacantPositionOptions.map((option, index) => (
                                                <option
                                                    key={index}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="name"
                                        >
                                            Mobile Number
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.number}
                                            name="number"
                                            id="number"
                                            onChange={(e) => onUpdateFormState('number', e.target.value)}
                                            placeholder="9XX XXX XXXX"
                                            maxLength={100}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="email"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.email ?? ''}
                                            name="email"
                                            id="email"
                                            onChange={(e) => onUpdateFormState('email', e.target.value)}
                                            maxLength={100}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-[15px]">
                                    <div className="w-full px-[15px]">
                                        <p className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2">
                                            Where did you hear about us? <span className="text-[12px] font-normal leading-[14px]">(You may only choose one)</span>
                                        </p>
                                        <div className="mt-[10px] mb-[20px]">
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="Social Media"
                                                name="hearAboutUs"
                                                id="socialMedia"
                                                checked={isRadioSelected('Social Media')}
                                                onChange={(e) => onUpdateFormState('hearAboutUs', e.target.value)}
                                            />
                                            <label 
                                                className="inline-block text-[14px] text-black leading-[20px] bg-[#E0E0E0] px-[10px] py-[5px] mt-[10px] mx-[2px] rounded-full cursor-pointer"
                                                htmlFor="socialMedia"
                                            >
                                                Social Media
                                            </label>
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="Search"
                                                name="hearAboutUs"
                                                id="search"
                                                checked={isRadioSelected('Search')}
                                                onChange={(e) => onUpdateFormState('hearAboutUs', e.target.value)}
                                            />
                                            <label 
                                                className="inline-block text-[14px] text-black leading-[20px] bg-[#E0E0E0] px-[10px] py-[5px] mt-[10px] mx-[2.5px] rounded-full cursor-pointer"
                                                htmlFor="Search"
                                            >
                                                Search
                                            </label>
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="Award Shows"
                                                name="hearAboutUs"
                                                id="awardShows"
                                                checked={isRadioSelected('Award Shows')}
                                                onChange={(e) => onUpdateFormState('hearAboutUs', e.target.value)}
                                            />
                                            <label 
                                                className="inline-block text-[14px] text-black leading-[20px] bg-[#E0E0E0] px-[10px] py-[5px] mt-[10px] mx-[2px] rounded-full cursor-pointer"
                                                htmlFor="awardShows"
                                            >
                                                Award Shows
                                            </label>
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="Events"
                                                name="hearAboutUs"
                                                id="events"
                                                checked={isRadioSelected('Events')}
                                                onChange={(e) => onUpdateFormState('hearAboutUs', e.target.value)}
                                            />
                                            <label 
                                                className="inline-block text-[14px] text-black leading-[20px] bg-[#E0E0E0] px-[10px] py-[5px] mt-[10px] mx-[2px] rounded-full cursor-pointer"
                                                htmlFor="events"
                                            >
                                                Events
                                            </label>
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="Word of Mouth"
                                                name="hearAboutUs"
                                                id="wordOfMouth"
                                                checked={isRadioSelected('Word of Mouth')}
                                                onChange={(e) => onUpdateFormState('hearAboutUs', e.target.value)}
                                            />
                                            <label 
                                                className="inline-block text-[14px] text-black leading-[20px] bg-[#E0E0E0] px-[10px] py-[5px] mt-[10px] mx-[2px] rounded-full cursor-pointer"
                                                htmlFor="wordOfMouth"
                                            >
                                                Word of Mouth
                                            </label>
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="Referral"
                                                name="hearAboutUs"
                                                id="referral"
                                                checked={isRadioSelected('Referral')}
                                                onChange={(e) => onUpdateFormState('hearAboutUs', e.target.value)}
                                            />
                                            <label 
                                                className="inline-block text-[14px] text-black leading-[20px] bg-[#E0E0E0] px-[10px] py-[5px] mt-[10px] mx-[2px] rounded-full cursor-pointer"
                                                htmlFor="referral"
                                            >
                                                Referral
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {formData.hearAboutUs === 'Referral' && (
                                    <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                        <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                            <label 
                                                className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                                htmlFor="referralPerson"
                                            >
                                                Referral's Name
                                            </label>
                                            <input
                                                className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                                type="text"
                                                value={formData.referralPerson}
                                                name="referralPerson"
                                                id="referralPerson"
                                                onChange={(e) => onUpdateFormState('referralPerson', e.target.value)}
                                                maxLength={100}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="w-full text-center bg-[#1E1D1D] pt-[30px] pb-[20px] border-[.5px] border-white border-dashed">
                                    <img
                                        className="block w-[35px] h-auto mb-[10px] mx-auto"
                                        src={uploadIcon}
                                        alt="upload"
                                    />
                                    <div className="relative inline-block text-center align-middle cursor-pointer rounded-[0.25rem] overflow-hidden">
                                        <input
                                            className="relative w-[180px] px-[35px] py-[5px] opacity-0 cursor-pointer z-[2]"
                                            type="file"
                                            name="file"
                                            id="file"
                                        />
                                        <button
                                            className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-[16px] text-black font-medium leading-[28px] bg-[#F6C900] cursor-pointer z-[1]"
                                        >
                                            Upload your file
                                        </button>
                                    </div>
                                    <p className="text-[14px] text-[#CCCCCC] tracking-normal leading-[17px] mt-[10px]">Types: .pdf, .doc, .docx; Max size: 50mb</p>
                                </div>
                                <div className="relative block px-[15px] -mx-[15px] mt-[30px] lg:mb-[10px]">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        id="checkbox"
                                        required
                                    />
                                    <label
                                        className="text-[18px] text-white leading-[22px] ml-[10px]"
                                        htmlFor="checkbox"
                                    >
                                        By clicking submit, you agree with&nbsp;
                                        <span className="text-[18px] font-black">
                                            our&nbsp;
                                            <Link className="text-[#007BFF]" to="/terms-and-conditions">terms & conditions</Link>
                                            , and&nbsp;
                                            <Link className="text-[#007BFF]" to="/privacy-policy">privacy policy</Link>.
                                        </span>
                                    </label>
                                </div>
                                <button
                                    className="block w-full md:w-auto h-auto text-[16px] font-bold tracking-normal bg-[#F6C900] px-[60px] py-[10px] mt-[20px] md:ml-auto uppercase clip-cta"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinTheTeam;