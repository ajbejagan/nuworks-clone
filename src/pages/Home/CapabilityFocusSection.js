import Title from '../../assets/capability-focus-title.png';
import Image from '../../assets/capabilities-image.png';

const CapabilityFocusSection = () => {
    return (
        <>
            <div className="w-full">
                <div className="w-full md:max-w-[720px] xl:max-w-[1140px] px-[15px] mx-auto">
                    <div className="flex flex-col md:flex-row-reverse flex-wrap xl:items-center -mx-[15px]">
                        <div className="flex-zz50 w-full lg:max-w-1/2 px-[15px]">
                            <img className="w-[250px] xl:w-[500px] h-auto" src={Title} alt="Capability focus" />
                            <div className="mt-[40px] ml-[20px]">
                                <h2 className="text-[24px] text-[#F6C900] font-bold uppercase leading-[32px]">
                                    CX
                                </h2>
                                <p className="w-full text-[#CCCCCC] mb-[20px]">
                                    We help brands hack the marketing funnel through insight-driven, intuitively designed customer experiences. We create impact by strategically aligning business goals to human-centric principles.
                                </p>
                                <h2 className="text-[24px] text-[#F6C900] font-bold uppercase leading-[32px]">
                                    Communications
                                </h2>
                                <p className="w-full text-[#CCCCCC] mb-[20px]">
                                    We create data-inspired messages that drive culture and technology. We produce highly engaging content to trigger brand love. We deploy brand-building solution to spur business growth.
                                </p>
                                <h2 className="text-[24px] text-[#F6C900] font-bold uppercase leading-[32px]">
                                    Commerce
                                </h2>
                                <p className="w-full text-[#CCCCCC] mb-[20px]">
                                    We help brands convert their digital presence to purchases through eCommerce consulting and precision marketing.
                                </p>
                            </div>
                        </div>
                        <div className="flex-zz50 w-full lg:max-w-1/2 flex items-center md:items-start justify-center md:justify-end px-[15px] mt-[30px]">
                            <img className="w-[250px] md:w-[350px] xl:w-[550px] h-auto" src={Image} alt="Capability" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CapabilityFocusSection;