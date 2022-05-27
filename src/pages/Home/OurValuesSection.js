import Title from '../../assets/our-values-title.png';
import ValuesImage1 from '../../assets/our-values/values-image-1.png';
import ValuesImage2 from '../../assets/our-values/values-image-2.png';
import ValuesImage3 from '../../assets/our-values/values-image-3.png';
import ValuesImage4 from '../../assets/our-values/values-image-4.png';
import ValuesImage5 from '../../assets/our-values/values-image-5.png';

const OurValuesSection = () => {
    return (
        <div id="our-values" className="w-full">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-wrap -mx-[15px]">
                    <div className="w-full px-[15px]">
                        <img className="w-[250px] md:w-[300px] xl:w-[400px] h-auto" src={Title} alt="Our Values" />
                    </div>
                    <div className="w-full px-[15px]">
                        <div className="flex flex-col lg:flex-row-reverse items-center px-[15px] my-[100px]">
                            <div className="flex-zz50 flex justify-center w-full lg:max-w-1/2">
                                <img className="w-[250px] md:w-[400px] xl:w-[400px] h-auto" src={ValuesImage1} alt="Be brave for good" />
                            </div>
                            <div className="flex-zz50 w-full lg:max-w-1/2 mt-[40px]">
                                <h2 className="text-[25px] md:text-[36px] text-[#F6C900] font-[800] leading-[42px] uppercase">Be brave for good</h2>
                                <p className="text-[16px] md:text-[24px] text-white font-[400] md:leading-[45px]">
                                    Brave is venturing into the unknown. It is our standard of excellence that delivers results. We <span className="text-[#F6C900] font-[800]">create meaningful human experiences.</span> Powered by integrity, we will define a better digital future.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center px-[15px] my-[100px]">
                            <div className="flex-zz50 flex justify-center w-full lg:max-w-1/2">
                                <img className="w-[250px] md:w-[400px] xl:w-[400px] h-auto" src={ValuesImage2} alt="Lead the Change" />
                            </div>
                            <div className="flex-zz50 w-full lg:max-w-1/2 mt-[40px]">
                                <h2 className="text-[25px] md:text-[36px] text-[#F6C900] font-[800] leading-[42px] uppercase">Lead the Change</h2>
                                <p className="text-[16px] md:text-[24px] text-white font-[400] md:leading-[45px]">
                                    Keep asking, keep exploring, keep pushing. Show the way in designing and building all things imaginable. <span className="text-[#F6C900] font-[800]">Learn, unlearn, grow and continue to reinvent</span> who we are, what we do, and how we do it.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse items-center px-[15px] my-[100px]">
                            <div className="flex-zz50 flex justify-center w-full lg:max-w-1/2">
                                <img className="w-[250px] md:w-[400px] xl:w-[400px] h-auto" src={ValuesImage3} alt="Trust &amp; Be Trustworthy" />
                            </div>
                            <div className="flex-zz50 w-full lg:max-w-1/2 mt-[40px]">
                                <h2 className="text-[25px] md:text-[36px] text-[#F6C900] font-[800] leading-[42px] uppercase">Trust &amp; Be Trustworthy</h2>
                                <p className="text-[16px] md:text-[24px] text-white font-[400] md:leading-[45px]">
                                    <span className="text-[#F6C900] font-[800]">Work with trust.</span> Have faith in your team, clients, and partners. In the same way, work to be trustworthy. <span className="text-[#F6C900] font-[800]">Be responsible. Be accountable.</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center px-[15px] my-[100px]">
                            <div className="flex-zz50 flex justify-center w-full lg:max-w-1/2">
                                <img className="w-[250px] md:w-[400px] xl:w-[400px] h-auto" src={ValuesImage4} alt="Be Customer Centric" />
                            </div>
                            <div className="flex-zz50 w-full lg:max-w-1/2 mt-[40px]">
                                <h2 className="text-[25px] md:text-[36px] text-[#F6C900] font-[800] leading-[42px] uppercase">Be Customer Centric</h2>
                                <p className="text-[16px] md:text-[24px] text-white font-[400] md:leading-[45px]">
                                    <span className="text-[#F6C900] font-[800]">Grow what grows us.</span> Strive to be the best version of yourself so we always deliver the most value to our customers. Their success is our success.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse items-center px-[15px] my-[100px]">
                            <div className="flex-zz50 flex justify-center w-full lg:max-w-1/2">
                                <img className="w-[250px] md:w-[400px] xl:w-[400px] h-auto" src={ValuesImage5} alt="Be Better Together" />
                            </div>
                            <div className="flex-zz50 w-full lg:max-w-1/2 mt-[40px]">
                                <h2 className="text-[25px] md:text-[36px] text-[#F6C900] font-[800] leading-[42px] uppercase">Be Better Together</h2>
                                <p className="text-[16px] md:text-[24px] text-white font-[400] md:leading-[45px]">
                                Collaboration is successful when diverse minds work. With great passion, respect, empathy, commitment, and a lot of fun we can achieve more as a team. <span className="text-[#F6C900] font-[800]">Great output comes from great relationships.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValuesSection;