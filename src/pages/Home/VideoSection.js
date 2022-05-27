import ReactPlayer from 'react-player';
import mobileVideo from '../../assets/videos/nuworks-mobile-video.mp4';
import webVideo from '../../assets/videos/nuworks-web-video.mp4';

const VideoSection = () => {
    return (
        <>
            <div className="min-h-screen">
                <div className="relative block w-full min-h-screen max-h-screen">
                    <ReactPlayer
                        className='absolute top-0 left-0 block md:hidden w-full'
                        playing={true}
                        volume={0}
                        muted={true}
                        loop
                        width='100%'
                        height='100%'
                        url={mobileVideo}
                    />
                    <ReactPlayer
                        className='absolute top-0 left-0 hidden md:block w-full'
                        playing={true}
                        volume={0}
                        muted={true}
                        loop
                        width='100%'
                        height='100%'
                        url={webVideo}
                    />
                </div>
            </div>
        </>
    )
}

export default VideoSection;