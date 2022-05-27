import Title from '../../assets/tech-stack-title.png';
import TechStackIcons from '../../assets/tech-stack';

const IconWrap = ({ image, desc }) => {
    return (
        <div className="inline-block">
            <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={image} alt={desc} />
        </div>
    )
}

const TechStackSection = () => {
    return (
        <div className="w-full mt-[100px] mb-[40px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center xl:items-end -mx-[15px]">
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <img className="w-[260px] xl:w-[450px] h-auto" src={Title} alt="Tech stack" />
                    </div>
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <p className="w-full text-[#CCCCCC] leading-[28px] mt-[20px]">
                            Our growing but curated catalogue of tools, subscriptions, and in-house enterprise make up why and how we can walk our talk in tech.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-[40px]">
                    {
                        TechStackIcons.map((icon, index) => {
                            return (
                                <IconWrap key={index} image={icon.image} desc={icon.description}  />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TechStackSection;