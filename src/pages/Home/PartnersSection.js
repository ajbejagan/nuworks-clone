import Title from '../../assets/partners-title.png';
import PartnerIcons from '../../assets/partners';

const IconWrap = ({ image, desc }) => {
    return (
        <div className="inline-block">
            <img className="w-[90px] md:w-[100px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={image} alt={desc} />
        </div>
    )
}

const PartnersSection = () => {
    return (
        <div className="w-full mb-[40px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center xl:items-end -mx-[15px]">
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <img className="w-[250px] xl:w-[450px] h-auto" src={Title} alt="Our partners" />
                    </div>
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <p className="w-full text-[#CCCCCC] leading-[28px] mt-[20px]">
                            As proud as we are of our people and capabilities, we are equally proud of the relationships we have forged with our partner clients. We work hard and smart at being their enthusiastic, abled partners.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-[40px]">
                    {
                        PartnerIcons.map((icon, index) => {
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

export default PartnersSection;