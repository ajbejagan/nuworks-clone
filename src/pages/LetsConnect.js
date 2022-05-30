import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../assets/lets-connect-heading.png';
import googlePartnerBadge from '../assets/google-partner-badge.png';
import fbMarketingPartnerBadge from '../assets/fb-marketing-partner-badge.png';
import {
    fbIcon,
    linkedInIcon,
    igIcon,
    twitterIcon,
    ytIcon
} from '../assets/icons';

const budgetOptions = [
    {
        'value': 'not set',
        'label': '----------'
    },
    {
        'value': 'below 50K',
        'label': 'Below 50K'
    },
    {
        'value': '50K to 1M',
        'label': '50K - 1M'
    },
    {
        'value': '1M to 3M',
        'label': '1M - 3M'
    },
    {
        'value': 'above 3M',
        'label': 'Above 3M'
    }
]

const serviceOptions = [
    {
        'value': 'not-set',
        'label': '----------'
    },
    {
        'value': 'Brand Strategy',
        'label': 'Brand Strategy'
    },
    {
        'value': 'Content Production',
        'label': 'Content Production'
    },
    {
        'value': 'Media',
        'label': 'Media'
    },
    {
        'value': 'Creative',
        'label': 'Creative'
    },
    {
        'value': 'Engagement',
        'label': 'Engagement'
    },
    {
        'value': 'Analytics',
        'label': 'Analytics'
    },
    {
        'value': 'Experience Design',
        'label': 'Experience Design'
    },
    {
        'value': 'Technology',
        'label': 'Technology'
    }
]

const LetsConnect = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        number: '',
        email: '',
        industry: '',
        company: '',
        brand: '',
        position: '',
        budget: '',
        service: ''
    });

    useEffect(() => {
        document.title = "Let's Connect"
    }, [])

    const onUpdateFormState = (field, value) => {
        console.log(value);
        setFormData({
            ...formData,
            [field]: value,
        });
        console.log(formData);
    }

    return (
        <div className="flex-1 w-full my-[100px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col lg:flex-row md:items-start -mx-[15px]">
                    <div className="w-full lg:max-w-1/2 px-[15px]">
                        <img className="w-[300px] h-auto" src={Heading} alt="What can we do for you?" />
                        <p className="w-[90%] text-[14px] text-white font-medium leading-[20px] mt-[20px] mb-[30px]">
                            Our ears are open. Our eyes are always looking forward. Let’s talk about your business, your goals, and your vision. We are ready to listen, to execute, and to follow through for you.
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
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.clientName ?? ''}
                                            name="clientName"
                                            id="clientName"
                                            onChange={(e) => onUpdateFormState('clientName', e.target.value)}
                                            maxLength={100}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="number"
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
                                </div>
                                <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="email"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="email"
                                            value={formData.email}
                                            name="email"
                                            id="email"
                                            onChange={(e) => onUpdateFormState('email', e.target.value)}
                                            maxLength={254}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="industry"
                                        >
                                            Industry
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.industry}
                                            name="industry"
                                            id="industry"
                                            onChange={(e) => onUpdateFormState('industry', e.target.value)}
                                            maxLength={254}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="company"
                                        >
                                            Company
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.company}
                                            name="company"
                                            id="company"
                                            onChange={(e) => onUpdateFormState('company', e.target.value)}
                                            maxLength={225}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="brand"
                                        >
                                            Brand
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.brand}
                                            name="brand"
                                            id="brand"
                                            onChange={(e) => onUpdateFormState('brand', e.target.value)}
                                            maxLength={225}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-[15px] lg:mb-[10px]">
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="position"
                                        >
                                            Designation / Position
                                        </label>
                                        <input
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            type="text"
                                            value={formData.position}
                                            name="position"
                                            id="position"
                                            onChange={(e) => onUpdateFormState('position', e.target.value)}
                                            maxLength={225}
                                            required
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-[15px] mb-[10px]">
                                        <label 
                                            className="inline-block text-base text-[#CCCCCC] font-normal leading-[19.2px] mb-2"
                                            htmlFor="budget"
                                        >
                                            Budget Range
                                        </label>
                                        <select
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            value={formData.budget}
                                            name="budget"
                                            id="budget"
                                            onChange={(e) => onUpdateFormState('budget', e.target.value)}
                                        >
                                            {budgetOptions.map((option, index) => (
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
                                            htmlFor="service"
                                        >
                                            Service Interests <span className="text-[12px] font-normal leading-[14px]">(Check all that apply)</span>
                                        </label>
                                        <select
                                            className="w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                            value={formData.service}
                                            name="service"
                                            id="service"
                                            onChange={(e) => onUpdateFormState('service', e.target.value)}
                                        >
                                            {serviceOptions.map((option, index) => (
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

export default LetsConnect;