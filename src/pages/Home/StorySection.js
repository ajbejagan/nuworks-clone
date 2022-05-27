import Title from '../../assets/story-title.png';
import Thumbnail from '../../assets/story-thumbnail.png';

const StorySection = () => {
    return (
        <div id="our-works" className="w-full my-[100px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col md:flex-col-reverse lg:flex-row-reverse flex-wrap -mx-[15px]">
                    <div className="flex-zz50 w-full lg:max-w-1/2 px-[15px]">
                        <img className="w-[300px] xl:w-[400px] h-auto" src={Title} alt="Our story" />
                        <div className="mt-[20px]">
                            <p className="w-full text-[18px] text-white leading-[32px] mb-[32px]">
                                NuWorks was founded in 2009, with the vision to provide meaningful human experiences to brands, consumers and the society. We developed and maintain a robust service portfolio with capabilities spanning the full spectrum of technology-driven marketing.
                            </p>
                            <p className="w-full text-[18px] text-white leading-[32px]">
                                An independent agency since inception, we are fortunate to grow into one of the biggest full-suite advertising and innovations agencies in the Philippines. Here is how we got there.
                            </p>
                        </div>
                    </div>
                    <div className="flex-zz50 w-full lg:max-w-1/2 h-full px-[15px]">
                        <img className="w-full h-auto mt-[20px]" src={Thumbnail} alt="Thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorySection;