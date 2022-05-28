import Title from '../../assets/awards-title.png';
import AwardIcons from '../../assets/awards';

const IconWrap = ({ image, desc, width, responsiveWidth }) => {
    return (
        <div className="inline-block m-[10px] align-middle">
            <img className={`${width} ${responsiveWidth ? `${responsiveWidth} ` : ''}h-auto mt-[10px] mx-[10px] mb-[20px]`} src={image} alt={desc} />
        </div>
    )
}

const AwardsSection = () => {
    return (
        <div className="w-full mb-[40px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col md:flex-row-reverse md:items-center xl:items-end -mx-[15px]">
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <img className="w-[250px] md:w-[300px] xl:w-[450px] h-auto" src={Title} alt="Awards" />
                    </div>
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <p className="w-full text-[#CCCCCC] xl:text-right leading-[28px] mt-[20px]">
                            Along the way, we have had the good fortune to win metal from some of the most respected and prestigious show in the industry — locally and internationally. These citations keep us humble and hungry.
                        </p>
                    </div>
                </div>
                <div className="w-full text-center mt-[40px]">
                    {
                        AwardIcons.map((icon, index) => {
                            return (
                                <IconWrap key={index} image={icon.image} desc={icon.description} width={icon.width} responsiveWidth={icon?.responsiveWidth}  />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AwardsSection;