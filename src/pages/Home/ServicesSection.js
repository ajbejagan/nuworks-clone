import Title from '../../assets/services-title.png';
import Image from '../../assets/services-image.png';

const ServicesSection = () => {
    return (
        <>
            <div id="services" className="w-full">
                <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                    <div className="flex flex-col md:flex-row flex-wrap xl:items-center -mx-[15px]">
                        <div className="flex-zz50 w-full lg:max-w-1/2 px-[15px]">
                            <img className="w-[300px] xl:w-[500px] h-auto" src={Title} alt="Service philosophy" />
                            <p className="w-full text-[#CCCCCC] mt-[40px]">
                                NuWorks builds, operates, and deploys digital services to help brands and business scale in the digital economy. This is made possible through StoryTeching: the process by which we utilize our end-to-end digital capabilities in communication, commerce, and customer experience.
                            </p>
                        </div>
                        <div className="flex-zz50 w-full lg:max-w-1/2 flex items-center md:items-start justify-center md:justify-end px-[15px]">
                            <img className="w-[250px] md:w-[350px] xl:w-[550px] h-auto" src={Image} alt="Service philosophy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSection;