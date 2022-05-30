import { useState } from 'react';
import { Link } from 'react-router-dom';
import WorksImage from '../../assets/work-image.png';
import {
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
} from '../../assets/works';

const items = [
    {
        title: 'PMFTC Appwards',
        imageUrl: Image1,
        itemLink: '',
        categories: ['CX', 'Analytics']
    },
    {
        title: 'Ingat Angat',
        imageUrl: Image2,
        itemLink: '',
        categories: ['CX', 'Experience Design']
    },
    {
        title: 'Swift Meat E-tindahan',
        imageUrl: Image3,
        itemLink: '',
        categories: ['Commerce', 'Technology']
    },
    {
        title: 'Avida Live Ready',
        imageUrl: Image4,
        itemLink: '',
        categories: ['Communications', 'Brand Strategy']
    },
    {
        title: 'Rockwellist',
        imageUrl: Image5,
        itemLink: '',
        categories: ['CX', 'Experience Design']
    },
    {
        title: 'Burger King Jackpot Fries',
        imageUrl: Image6,
        itemLink: '',
        categories: ['Communications', 'Brand Strategy']
    },
    {
        title: 'Greenwich GBox',
        imageUrl: Image7,
        itemLink: '',
        categories: ['CX', 'Brand Strategy']
    },
    {
        title: 'Jollibee Corporate Website',
        imageUrl: Image8,
        itemLink: '',
        categories: ['CX', 'Experience Design']
    },
    {
        title: 'CECP Website',
        imageUrl: Image9,
        itemLink: '',
        categories: ['CX', 'Experience Design']
    },
    {
        title: 'UNICEF Basket of Hope Year 2',
        imageUrl: Image10,
        itemLink: '',
        categories: ['Commerce', 'Media']
    },
    {
        title: 'Red Horse Beer Banner',
        imageUrl: Image11,
        itemLink: '',
        categories: ['Communications', 'Engagement']
    },
    {
        title: 'Purina Super Christmas',
        imageUrl: Image12,
        itemLink: '',
        categories: ['Commerce', 'Ecommerce Marketing']
    },
    {
        title: 'Marlboro Ice Blast',
        imageUrl: Image13,
        itemLink: '',
        categories: ['CX', 'Brand Strategy']
    },
    {
        title: 'SMB Delivers Commerce',
        imageUrl: Image14,
        itemLink: '',
        categories: ['Commerce', 'Creative']
    },
    {
        title: 'Boomerang Awards',
        imageUrl: Image15,
        itemLink: '',
        categories: ['CX', 'Technology']
    },
]

const capabilityFocusOptions = [
    'Filter by Capability Focus',
    'CX',
    'Communications',
    'Commerce',
    'All'
]

const servicesOptions = [
    'Filter by Services',
    'Brand Strategy',
    'Content Production',
    'Media',
    'Creative',
    'Engagement',
    'Ecommerce Marketing',
    'Consulting',
    'Analytics',
    'Experience Design',
    'Technology',
    'All'
]

const WorkItemWrap = ({ title, imageUrl, itemLink, category }) => {
    return (
        <div className="relative inline-block w-[230px] mx-[20px] mb-[15px]">
            <a href={itemLink} target="_blank" rel="noreferrer">
                <div className="w-full h-[150px] border-[0.81px] border-[#636161]">
                    <img
                        className="w-full h-full object-cover"
                        src={imageUrl}
                        alt="title"
                    />
                </div>
                <div className="-mx-[10px]">
                    <p className="text-[19px] text-[#F6C900] font-semibold leading-[27px] mt-[10px] mb-[5px]">{title}</p>
                    <p className="text-[12px] text-white italic font-bold uppercase leading-none">{category}</p>
                </div>
            </a>
        </div>
    )
}

const WorksSection = () => {
    const [capabilityFocus, setCapabilityFocus] = useState('not set');
    const [services, setServices] = useState('not set');

    const filteredItems = items.filter((item) => {
        return (item.categories.includes(capabilityFocus) || ['not set', 'All'].includes(capabilityFocus)) && (item.categories.includes(services) || ['not set', 'All'].includes(services))
    });

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-[30px] md:mt-[60px] mb-[60px]">
                <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                    <div className="flex flex-col md:flex-row mb-[10px]">
                        <h1 className="self-start text-[30px] text-white font-bold leading-[36px] mb-[10px] md:mr-[5%]">/ Related Work /</h1>
                        <Link className="self-center text-[18px] text-[#F6C900] font-bold uppercase" to="/#works">
                            View All Works
                        </Link>
                    </div>
                    <div className="text-center">
                    {
                        [items[3], items[5], items[6],items[12]].map((item, index) => {
                            return <WorkItemWrap key={index} title={item.title} imageUrl={item.imageUrl} itemLink={item.itemLink} category={item.categories[0]} />
                        }) 
                    }
                    </div>
                </div>
            </div>
            <div id="works" className="flex flex-col items-center justify-center">
                <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                    <img className="w-[300px] md:w-[350px] xl:w-[650px] h-auto mx-auto" src={WorksImage} alt="About" />
                    <div className="w-full px-[15px] mt-[20px] mx-auto mb-[40px]">
                        <p className="text-[18px] text-[#CCCCCC] leading-[32px]">
                            From “to”, we “DO”. We have prided ourselves by our work that not only move the needle, but because it helps move the gears of economy. Through our work, we do help fulfill the needs of our clients, of people. This is what we do, these are some of the work we have done.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full px-[15px] mx-auto mb-[60px]">
                        <div className="w-full md:w-[300px] md:mr-[10px] mb-[10px]">
                            <select
                                className="w-full text-[1rem] text-[#8B8B8B] font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                value={capabilityFocus}
                                name="capabilityFocus"
                                id="capabilityFocus"
                                onChange={(e) => setCapabilityFocus(e.target.value)}
                            >
                                {capabilityFocusOptions.map((option, index) => (
                                    <option
                                        key={index}
                                        value={index === 0 ? "not set" : option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full md:w-[300px] mb-[10px]">
                            <select
                                className="w-full text-[1rem] text-[#8B8B8B] font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                                value={services}
                                name="services"
                                id="services"
                                onChange={(e) => setServices(e.target.value)}
                            >
                                {servicesOptions.map((option, index) => (
                                    <option
                                        key={index}
                                        value={index === 0 ? "not set" : option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-center">
                    {
                        filteredItems.length === 0 ? (
                            <h1 className="text-[24px] text-[#F6C900] font-bold tracking-[0.01em] leading-[32px] uppercase mt-[130px]">Coming Soon</h1>
                        ) : 
                        (
                            filteredItems.map((item, index) => {
                                return <WorkItemWrap key={index} title={item.title} imageUrl={item.imageUrl} itemLink={item.itemLink} category={item.categories[0]} />
                            })
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksSection;