import VideoSection from "./VideoSection";
import ServicesSection from "./ServicesSection";
import CapabilityFocusSection from "./CapabilityFocusSection";

const Home = () => {
    return (
        <>
            <div className="min-h-screen">
                <VideoSection />
                <ServicesSection />
                <CapabilityFocusSection />
            </div>
        </>
    )
}

export default Home;