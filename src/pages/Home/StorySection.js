import { useState } from 'react';
import ReactDOM from 'react-dom';
import Title from '../../assets/story-title.png';
import Thumbnail from '../../assets/story-thumbnail.png';

const Modal = ({ open, onClose }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/[.75] z-[1000]" onClick={onClose} />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] lg:max-w-[800px] mx-auto z-[1000]">
                <div className="relative flex flex-col w-full bg-white border-[rgba(0_0_0_0.2)] rounded-[0.3rem] overflow-hidden outline-none">
                    <div className="flex justify-end bg-modalHeaderBg p-4 border-b border-[#DEE2E6]">
                        <button
                            className="p-4 -mt-4 -mr-4 -mb-4 ml-auto drop-shadow-[0_1px_0_#FFFFFF]"
                            onClick={onClose}
                        >
                            <span className="text-[1.5rem] text-black/[0.8] font-bold leading-[1]">×</span>
                        </button>
                    </div>
                    <div className="relative">
                        <div className="relative h-0 pb-[56.25%] overflow-hidden">
                            <iframe className="absolute top-0 left-0 w-full h-full" width="100%" height="550" src="https://www.youtube.com/embed/lU_ytGp00NU" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

const StorySection = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <div className="w-full my-[100px]">
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
                            <img className="w-full h-auto mt-[20px] cursor-pointer" src={Thumbnail} alt="Thumbnail" onClick={() => setIsOpen(true)} />
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}

export default StorySection;