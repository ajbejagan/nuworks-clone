import VideoSection from "./VideoSection";
import ServicesSection from "./ServicesSection";
import CapabilityFocusSection from "./CapabilityFocusSection";
// import ListOfServicesSection from "./ListOfServicesSection";
import TechStackSection from "./TechStackSection";
import AboutSection from "./AboutSection";
import OurStorySection from "./OurStorySection";
import OurValuesSection from "./OurValuesSection";

const Home = () => {
    return (
        <>
            <div className="min-h-screen">
                <VideoSection />
                <ServicesSection />
                <CapabilityFocusSection />
                <TechStackSection />
                <AboutSection />
                <OurStorySection />
                <OurValuesSection />
            </div>
        </>
    )
}

export default Home;