import AboutImage from '../../assets/about-image.png';

const AboutSection = () => {
    return (
        <div id="about" className="flex items-center justify-center">
            <img className="w-[300px] md:w-[550px] h-auto" src={AboutImage} alt="About" />
        </div>
    )
}

export default AboutSection;