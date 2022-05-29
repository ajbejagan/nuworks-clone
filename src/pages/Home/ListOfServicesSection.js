import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from '../../assets/list-of-services-title.png';
import {
    bs1,
    bs2,
    bs3,
    cp1,
    cp2,
    cp3,
    cp4,
    cp5,
    m1,
    m2,
    m3,
    m4,
    m5,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
} from '../../assets/services';

const servicesOptions = {
    'Brand Strategy': [
        {
            title: 'Situation Analysis and Brand Audit',
            imageUrl: bs1,
            desc: `We use audience-focused research methods to unearth customers' intent, sentiment, and context, thus informing brands on the most relevant behavioral insights. These insights are leveraged in creating dynamic, flexible, and engaging content and campaigns.`
        },
        {
            title: 'Brand Communications and Content Strategy',
            imageUrl: bs2,
            desc: `We develop campaigns that deliver on short-term brand activations and long-term brand building. By creating targeted and personalised communications, we help brands execute creative experiences and impactful messaging across the stages of the marketing funnel.`
        },
        {
            title: 'Full Funnel, Multi-Channel Brand Experience Strategy',
            imageUrl: bs3,
            desc: `How brands decide on interacting with their audiences, across audiences, industries and touchpoints influences the customers' intent on interacting with the brand again. As communication strategy experts, we deliver on omni-channel experiences through content, campaigns and channel activations, experienced by consumers at every stage of their journey.`
        }
    ],
    'Content Production': [
        {
            title: 'Full Scale Digital and TVC Productions',
            imageUrl: cp1,
            desc: `We deliver end-to-end, full scope, online and on-air videos from pre-production to post-production, including storyboarding, production design, lighting and camera equipment, location hunting or studio procurement, and talent casting.`
        },
        {
            title: 'Post Production',
            imageUrl: cp2,
            desc: `We offer the full suite of post-production service including offline, online color grading, and animation work for Digital and TVC videos across the formats - 2D Motion Graphics videos, Pocket TVCs, Microvideos (GIFs, Bumper Ads).`
        },
        {
            title: 'Livestream Production',
            imageUrl: cp3,
            desc: `We stage remote shoots complete with director and producer supervision, and cover a range of productions such as webinars, brand launch, game streaming, culinary shows, live and taped event coverage.`
        },
        {
            title: 'Audio Production',
            imageUrl: cp4,
            desc: `We provide full scope sound design, scoring, soundtrack production, voice over casting and recording, mixing, arrangment for all media platforms.`
        },
        {
            title: 'Photoshoots',
            imageUrl: cp5,
            desc: `We stage and deliver full-scope photoshoots for asset banks, new product packaging, and event coverage.`
        }
    ],
    'Media': [
        {
            title: 'Media Planning & Strategy',
            imageUrl: m1,
            desc: `We deliver overall media management, buying and campaign monitoring, overall media roll-out framework, channel recommendations, targeting and cost-effective budget allocation strategies.`
        },
        {
            title: 'Precision Marketing',
            imageUrl: m2,
            desc: `We help brands achieve lower funnel objectives (leads generation, conversion, installs, etc.) by connecting brands to their most valuable audiences through the right digital channels at the most cost-effective rates. <br /> Creative assets and materials are constantly optimized based on media performance to ensure that the right communication is being delivered to the right audience.`
        },
        {
            title: 'Performance Audit',
            imageUrl: m3,
            desc: `We conduct in-depth audits and assessments of current digital assets to identify gaps prior to launching precision marketing campaigns. We assist in the proper attribution of actions and sales by setting up tracking tags.`
        },
        {
            title: 'Media Reporting and Analytics',
            imageUrl: m4,
            desc: `We deliver comprehensive post-mortem reports that present insight and recommendations that will improve marketing performance.`
        },
        {
            title: 'Influencer Marketing',
            imageUrl: m5,
            desc: `We drive brand amplification and engagement by leveraging partner influencer networks. Together, we develop and execute innovative influencer marketing efforts that strengthen the brand messaging. <br /> Our IM team develops creative concepts to campaign realisation, measures and provides reports on each campaign.`
        }
    ],
    'Creative': [
        {
            title: 'Multi-Platform Content Development',
            imageUrl: c1,
            desc: `Online, on-air, on-ground, we create compelling content that closes the loop and provides satisfaction for our clients and their consumers.`
        },
        {
            title: 'Creative Supervision (Print/TV/Digital Shoots)',
            imageUrl: c2,
            desc: `We provide top-notch, plug-and-play production capabilities, effective at any stage of development, on any medium.`
        },
        {
            title: 'Digital Playbook Development',
            imageUrl: c3,
            desc: `We develop platforms and programs that facilitate the enablement and empowerment of our clients and partners as we navigate the digital and social terrain together.`
        },
        {
            title: 'Creative Tech Ideation',
            imageUrl: c4,
            desc: `To further the effectiveness of brands' communications, we leverage the infusion of technology to amplify creative output, thus providing marketers with effective executions designed to forge a strong bond with consumers.`
        },
        {
            title: 'Big Idea Generation',
            imageUrl: c5,
            desc: `We develop big ideas for brands to effectively communicate the ethos of their products and services to consumers. Our big ideas are equipped with astute consumer insights, deep product understanding and a relentless desire for crisp expression of ideas.`
        },
        {
            title: 'Campaign Development',
            imageUrl: c6,
            desc: `We create a play of creative, research-backed ideas with strategic thinking to come up with engaging, multi-platform campaigns. By deep-diving into the audience segments' psychology, we are able to develop communications that consumers connect with on a highly personal level.`
        },
        {
            title: 'Brand Book Development',
            imageUrl: c7,
            desc: `Our brand books are developed carefully, describing in great detail the brand context alongside the specifics of presenting brand elements across multiple communication channels. Aimed to strengthen the brand's visual culture, it provides a clear picture of the brand identity.`
        },
        {
            title: 'Key Visual Development',
            imageUrl: c8,
            desc: `To strengthen a brand's presence and recall amongst consumers, we design key visuals by applying the right mix of market intelligence and creativity. The visual creation emphasizes on uniqueness and helps brand create emotional associations that consumers can relate to.`
        },
        {
            title: 'Copywriting',
            imageUrl: c9,
            desc: `We look at copywriting as a strong instrument in the marketing toolbox that has a big influence on the efficacy of an advertising or marketing piece. We take a methodical, research-based approach towards developing copy, learning in great depth about the product, the company and the audience in order to create messaging that is unique and evokes positive sentiment amongst consumers.`
        },
        {
            title: 'Logo Designs',
            imageUrl: c10,
            desc: `With the end goal of reinforcing loyalty and strengthening recognition, we design logos and assets that help brands evolve to the next step of their marketing journey.`
        }
    ],
};

const Card = ({ title, imageUrl, desc }) => {
    return (
        <div className="h-[550px] bg-cardBg mx-[10px] border border-[rgba(0,0,0,.125)] rounded-[0.25rem] shadow-[0_1px_5px_0_rgb(186,186,186,0.20)]">
            <div className="pt-[3.5rem] px-[1.25rem] pb-[1.25rem]">
                <div>
                    <img className="mx-auto" src={imageUrl} alt={title} />
                </div>
                <h2 className="text-[18px] text-[#FFFFFF] font-semibold leading-[24px] my-[20px] mx-auto">{title}</h2>
                <p className="text-[16px] text-[#FFFFFF] leading-[24px]">{desc}</p>
            </div>
        </div>
    )
}

const ListOfServicesSection = () => {
    const [category, setCategory] = useState('Brand Strategy');
    const carouselSettings = {
        dots: true,
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="w-full mt-[60px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <img className="w-[250px] xl:w-[500px] h-auto" src={Title} alt="List of services" />
                <div className="mt-[30px]">
                    <select
                        className="md:hidden w-full text-[1rem] text-white font-normal leading-[1.5] bg-[#1E1D1D] px-3 py-1.5 border border-[#8B8B8B] rounded"
                        value={category}
                        name="category"
                        id="category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {Object.keys(servicesOptions).map((option, index) => (
                            <option
                                key={index}
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="mt-[30px]">
                        <h2 className="text-[26px] text-white font-bold leading-[36px] uppercase mb-[30px]">/ {category} /</h2>
                        <div>
                            <Slider {...carouselSettings}>
                            {
                                servicesOptions[category].map((item, index) => {
                                    return <Card key={index} title={item.title} imageUrl={item.imageUrl} desc={item.desc} />
                                })
                            }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListOfServicesSection;