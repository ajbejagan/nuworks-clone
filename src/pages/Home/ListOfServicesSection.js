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
    e1,
    e2,
    e3,
    em1,
    em2,
    em3,
    em4,
    em5,
    em6,
    cns1,
    cns2,
    cns3,
    a1,
    a2,
    a3,
    ed1,
    ed2,
    ed3,
    t1,
    t2,
    t3,
    t4,
    t5,
    t6,
    t7,
    t8,
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
    'Engagement': [
        {
            title: 'Social Media Page Engagement',
            imageUrl: e1,
            desc: `We manage comments and private messages in brand social accounts (inbound). This covers FAQ Management and SMPI process for complaints, recommendations and inquiries on Facebook, Twitter, and Instagram.`
        },
        {
            title: 'Social Listening',
            imageUrl: e2,
            desc: `We monitor social media channels to identify insights on customer feedback and direct mentions, supporting the strategic insighting. We put strategic premium on social listening as a crucial component of audience research and strategic planning.`
        },
        {
            title: 'Sentiment Analysis',
            imageUrl: e3,
            desc: `We provide quantitative analysis of the conversations and theme clusters present in brand materials via sentiment crawling and tagging.`
        }
    ],
    'Ecommerce Marketing': [
        {
            title: 'eCommerce Strategy',
            imageUrl: em1,
            desc: `We generate a clear view of growth opportunities and strategic imperatives for your brand to meet its KPIs by analyzing the business situation, target segments, personas, competitive and market landscape.`
        },
        {
            title: 'Lead-to-Platform Communications',
            imageUrl: em2,
            desc: `We provide thumb-stopping shoppable content and experiences through creative use of digital and eCommerce technology. Our data-informed media and creatives are designed to maximize investment efficiencies in brand building and conversion efforts.`
        },
        {
            title: 'Dynamic eCommerce Content',
            imageUrl: em3,
            desc: `We provide dynamic content services for eCommerce that are informed by data and results, enhancing the reach and relevance of the content for the end consumer.`
        },
        {
            title: 'SEO and Platform Audit and Optimization',
            imageUrl: em4,
            desc: `We review and propose SEO techniques for better eCommerce platform visibility and search ranking.`
        },
        {
            title: 'Performance Media',
            imageUrl: em5,
            desc: `Our Performance Media services provide media planning, buying and optimization to create effective search, social, display, and commerce experiences, and convert consumer intent into revenue.`
        },
        {
            title: 'eCommerce Intel, Analytics, and Report Automation',
            imageUrl: em6,
            desc: `We gather and analyze platform traffic and activity data and turn these into insights that enhance the customer purchase journey.`
        }
    ],
    'Consulting': [
        {
            title: 'Digital Ecosystem and Experience Audit',
            imageUrl: cns1,
            desc: `We provide a multi-method assessment of digital assets of the brand and its key competitors to determine the brand's position in the Digital Maturity Roadmap with respect to media, strategy, engagement and experience design practitioners and managers. The audit highlights issues and opportunities across different touchpoints in the consumer journey.`
        },
        {
            title: 'eCommerce Transformation Strategy',
            imageUrl: cns2,
            desc: `
                The eCommerce Transformation Strategy helps businesses in articulating their eCommerce goals, key strategies and operational tactics. We provide clients a roadmap for business transformation by identifying the enablers needed across the eCommerce value chain.
            `
        },
        {
            title: 'Innovation Workshops',
            imageUrl: cns3,
            desc: `The Innovation Session is a facilitated, cross-functional ideation workshop that uses human-centered design principles and frameworks to provide solutions spanning across customer experience, product/service offering and business configuration. Brands are provided with a Lean or Business Model Canvas that informs them of the pilot projects that will help in meeting the business objectives.`
        }
    ],
    'Analytics': [
        {
            title: 'Digital Consumer Intelligence',
            imageUrl: a1,
            desc: `We combine digital, survey, social and first party data to understand consumer and market trends. We generate actionable consumer insights for effective tactical and strategic executions.`
        },
        {
            title: 'Brand Communications and Content Performance Analytics',
            imageUrl: a2,
            desc: `To help brands appreciate the true impact of their communications and content, we run their various creative executions through a series of tests to deeply analyze and measure effectiveness against set business objectives.`
        },
        {
            title: 'Full-Funnel, Multi-Channel Performance Analytics',
            imageUrl: a3,
            desc: `We provide effectiveness analysis at each stage of the marketing funnel to determine overall performance and identify and mitigate drop-off or fall-out points.`
        }
    ],
    'Experience Design': [
        {
            title: 'Platform UX/UI design',
            imageUrl: ed1,
            desc: `We help brands improve engagement with their customers by designing best-in-class platform UX/UI design.`
        },
        {
            title: 'Service Design',
            imageUrl: ed2,
            desc: `We simplify what is complex for consumers and brands and ensure viability across multiple touchpoints. Our Experienced Designers apply UX and CX principles that generate best experiences and engagement for both consumers and brands.`
        },
        {
            title: 'Expert Review and Usability Testing',
            imageUrl: ed3,
            desc: `We build a comprehensive assessment of brand touchpoints through usability tests, from the customer journey to the user interface of the brands' different online platforms.`
        }
    ],
    'Technology': [
        {
            title: 'Technical Deep Dive and Workshops',
            imageUrl: t1,
            desc: `We deliver simulation exercises to measure viability of a proposed solution on current operational processes and systems. By zooming in on backend operations, we determine features and capabilities of backend systems like the Content Management System (CMS), Customer Relationship Management (CRM) system, or a Distribution Management System (DMS), to make operations and functions more efficient in serving and impacting overall customer experience.`
        },
        {
            title: 'Solutions Architecture with Project Management',
            imageUrl: t2,
            desc: `We help brands apply calibrations on Systems Design to improve system scalability, optimize costs, improve system security, improve migration readiness, and integrate new systems and services.`
        },
        {
            title: 'eCommerce Web Application Development',
            imageUrl: t3,
            desc: `Following our Systems Design, we proceed with the development and testing of a secure online store. We integrate payment gateways, marketplaces, and ERP for fulfillment. We also do custom developments on top of other solutions, such as Magento or Shopify.`
        },
        {
            title: 'Custom Chatbot Development and Integration',
            imageUrl: t4,
            desc: `We design and build custom conversational and transactional (eCommerce) chatbots crafted to generate revenue and integrate seamlessly with your website and eCommerce applications.`
        },
        {
            title: 'Spark AR Filter Development',
            imageUrl: t5,
            desc: `With Spark AR Studio, we develop custom AR filters to boost brand personality and memorability.`
        },
        {
            title: 'Custom Machine Learning Engineering Solutions',
            imageUrl: t6,
            desc: `We implement custom machine learning solutions to enhance brand websites and applications. Solutions executed range across recommendation engines for eCommerce sites by deploying ML models, automated sentiment analysis systems, out-of-stock detection systems, anomaly detection systems and custom data scraping solutions.`
        },
        {
            title: 'Website and System Migration',
            imageUrl: t7,
            desc: `We migrate sites from one tech stack to another: from PHP, Python, and JavaScript projects. We also migrate existing systems from one platform to another, as we have experts on AWS, GCP, and Digital Ocean platforms.`
        },
        {
            title: 'Software Development and Custom Integration Solutions',
            imageUrl: t8,
            desc: `We design, build, and integrate solutions and applications based on custom requirements — CRM development and integration, custom web development solutions, single page applications, progressive web apps, back-end integration, custom workflow, and more.`
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
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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
                    <ul className="md:flex md:justify-center md:flex-wrap md:my-[20px]">
                    {Object.keys(servicesOptions).map((option, index) => (
                        <li
                            key={index}
                            className={`text-[13px] ${option === category ? "text-white" : "text-[#ABABAB]"} font-semibold leading-[16.8px] uppercase p-[.5rem] cursor-pointer`}
                            onClick={() => setCategory(option)}
                        >
                            {option}
                        </li>
                    ))}
                    </ul>
                    <div className="mt-[30px] md:mt-0">
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