import VideoSection from "./VideoSection";
import ServicesSection from "./ServicesSection";
import CapabilityFocusSection from "./CapabilityFocusSection";
// import ListOfServicesSection from "./ListOfServicesSection";
import TechStackSection from "./TechStackSection";

const Home = () => {
    return (
        <>
            <div className="min-h-screen">
                <VideoSection />
                <ServicesSection />
                <CapabilityFocusSection />
                <TechStackSection />
            </div>
        </>
    )
}

export default Home;