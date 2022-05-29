import VideoSection from "./VideoSection";
import ServicesSection from "./ServicesSection";
import CapabilityFocusSection from "./CapabilityFocusSection";
// import ListOfServicesSection from "./ListOfServicesSection";
import WorksSection from "./WorksSection";
import TechStackSection from "./TechStackSection";
import AboutSection from "./AboutSection";
import StorySection from "./StorySection";
import ValuesSection from "./ValuesSection";
import PartnersSection from "./PartnersSection";
import AwardsSection from "./AwardsSection";
import AffiliationsSection from "./AffiliationsSection";
import CTASection from "./CTASection";

const Home = () => {
    return (
        <>
            <div className="min-h-screen">
                <VideoSection />
                <ServicesSection />
                <CapabilityFocusSection />
                {/* <ListOfServicesSection /> */}
                <WorksSection />
                <TechStackSection />
                <AboutSection />
                <StorySection />
                <ValuesSection />
                <PartnersSection />
                <AwardsSection />
                <AffiliationsSection />
                <hr className="w-[70%] border-white border-dashed mt-[30px] mx-auto" />
                <CTASection />
            </div>
        </>
    )
}

export default Home;