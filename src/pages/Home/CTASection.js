import { useNavigate } from "react-router-dom";
import mobileTitle from '../../assets/CTA-mobile-title.png';
import webTitle from '../../assets/CTA-web-title.png';

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full my-[100px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col justify-center">
                    <img className="block md:hidden" src={mobileTitle} alt="Create Brave Work" />
                    <img className="w-[80%] h-auto md:block hidden mx-auto" src={webTitle} alt="Create Brave Work" />
                    <div className="flex flex-col lg:flex-row items-center md:justify-center gap-y-[30px] mt-[70px] mb-[30px]">
                        <button
                            className="w-[90%] md:w-[400px] h-auto text-[24px] md:text-[36px] font-bold tracking-normal leading-[29px] md:leading-[43px] bg-[#F6C900] py-[10px] lg:mx-[30px] clip-cta"
                            onClick={() => navigate('/lets-connect')}
                        >
                            Let's Connect
                            <span className="block text-[12px] md:text-[16px] text-center font-[500] tracking-normal leading-[14px] md:leading-[19px]">How might we grow your business?</span>
                        </button>
                        <button
                            className="w-[90%] md:w-[400px] h-auto text-[24px] md:text-[36px] font-bold tracking-normal leading-[29px] md:leading-[43px] bg-[#F6C900] py-[10px] lg:mx-[30px] clip-cta"
                            onClick={() => navigate('/join-the-team')}
                        >
                            Be One of Us
                            <span className="block text-[12px] md:text-[16px] text-center font-[500] tracking-normal leading-[14px] md:leading-[19px]">Submit your application</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection;