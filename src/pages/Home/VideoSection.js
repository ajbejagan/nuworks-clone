import ReactPlayer from 'react-player';
import mobileVideo from '../../assets/videos/nuworks-mobile-video.mp4';
import webVideo from '../../assets/videos/nuworks-web-video.mp4';

const VideoSection = () => {
    return (
        <>
            <div className="min-h-screen">
                <div className="relative block md:hidden w-full min-h-screen max-h-screen">
                    <ReactPlayer
                        className='w-full absolute top-0 left-0'
                        autoplay={true}
                        volume='0'
                        muted={true}
                        loop
                        width='100%'
                        height='100%'
                        url={mobileVideo}
                    />
                </div>
            </div>
        </>
    )
}

export default VideoSection;