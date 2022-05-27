import VideoSection from "./VideoSection";
import ServicesSection from "./ServicesSection";
import CapabilityFocusSection from "./CapabilityFocusSection";
// import ListOfServicesSection from "./ListOfServicesSection";
import TechStackSection from "./TechStackSection";
import AboutSection from "./AboutSection";
import StorySection from "./StorySection";
import ValuesSection from "./ValuesSection";
import PartnersSection from "./PartnersSection";
import AwardsSection from "./AwardsSection";
import AffiliationsSection from "./AffiliationsSection";

const Home = () => {
    return (
        <>
            <div className="min-h-screen">
                <VideoSection />
                <ServicesSection />
                <CapabilityFocusSection />
                <TechStackSection />
                <AboutSection />
                <StorySection />
                <ValuesSection />
                <PartnersSection />
                <AwardsSection />
                <AffiliationsSection />
            </div>
        </>
    )
}

export default Home;