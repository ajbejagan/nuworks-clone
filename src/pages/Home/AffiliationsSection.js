import Title from '../../assets/affiliations-title.png';
import AffiliationIcons from '../../assets/affiliations';

const IconWrap = ({ image, desc, width, xlWidth }) => {
    return (
        <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
            <img className={`w-[${width}px] ${xlWidth ? `xl:w-[${xlWidth}px]` : '' } h-auto mt-[10px] mx-[10px] mb-[20px]`} src={image} alt={desc} />
        </div>
    )
}

const AffiliationsSection = () => {
    return (
        <div className="w-full mb-[40px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center xl:items-end -mx-[15px]">
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <img className="w-[250px] md:w-[300px] xl:w-[450px] h-auto" src={Title} alt="Affiliations" />
                    </div>
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <p className="w-full text-[#CCCCCC] leading-[28px] mt-[20px]">
                            We belong to, are recognized by, and work with some of the most vital institutions and policy makers in tech and marketing.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-[40px]">
                    {
                        AffiliationIcons.map((icon, index) => {
                            return (
                                <IconWrap key={index} image={icon.image} desc={icon.description} width={icon.width} xlWidth={icon?.xlWidth}  />
                            )
                        })
                    }
                    {/* <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
                        <img className="w-[140px] xl:w-[160px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={googlePartner} alt="Google Partner" />
                    </div>
                    <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
                        <img className="w-[120px] xl:w-[140px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={fbMarketingPartner} alt="Facebook Marketing Partner" />
                    </div>
                    <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
                        <img className="w-[120px] xl:w-[150px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={fourAsPH} alt="4As Philippines" />
                    </div>
                    <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
                        <img className="w-[140px] xl:w-[160px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={IMMAP} alt="IMMAP" />
                    </div>
                    <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
                        <img className="w-[110px] xl:w-[130px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={pana} alt="PANA" />
                    </div>
                    <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
                        <img className="w-[150px] xl:w-[170px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={CPHG} alt="CPHG" />
                    </div>
                    <div className="inline-block m-[10px] md:mx-[30px] md:my-[20px] align-middle">
                        <img className="w-[170px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={IDF} alt="Interaction Design Foundation" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AffiliationsSection;