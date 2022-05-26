import Title from '../../assets/list-of-services-title.png';

const ListOfServicesSection = () => {
    return (
        <div className="w-full mt-[60px]">
            <div className="w-full md:max-w-[720px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="">
                    <img className="w-[250px] xl:w-[500px] h-auto" src={Title} alt="List of services" />
                </div>
            </div>
        </div>
    )
}

export default ListOfServicesSection;