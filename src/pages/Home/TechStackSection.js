import Title from '../../assets/tech-stack-title.png';
import DigitalOcean from '../../assets/tech-stack/digital-ocean.png';
import AWS from '../../assets/tech-stack/aws.png';
import MySql from '../../assets/tech-stack/mysql.png';
import MongoDB from '../../assets/tech-stack/mongodb.png';
import PostgreSql from '../../assets/tech-stack/postgresql.png';
import Nginx from '../../assets/tech-stack/nginx.png';
import Php from '../../assets/tech-stack/php.png';
import CloudFlare from '../../assets/tech-stack/cloudflare.png';
import Magento from '../../assets/tech-stack/magento.png';
import Moodle from '../../assets/tech-stack/moodle.png';
import WordPress from '../../assets/tech-stack/wordpress.png';
import SuiteCRM from '../../assets/tech-stack/suitecrm.png';
import Drupal from '../../assets/tech-stack/drupal.png';
import Django from '../../assets/tech-stack/django.png';
import Python from '../../assets/tech-stack/python.png';
import Laravel from '../../assets/tech-stack/laravel.png';

const TechStackSection = () => {
    return (
        <div className="w-full mt-[100px] mb-[40px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center xl:items-end -mx-[15px]">
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <img className="w-[260px] xl:w-[450px] h-auto" src={Title} alt="Tech stack" />
                    </div>
                    <div className="w-full md:max-w-1/2 px-[15px]">
                        <p className="w-full text-[#CCCCCC] leading-[28px] mt-[20px]">
                            Our growing but curated catalogue of tools, subscriptions, and in-house enterprise make up why and how we can walk our talk in tech.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-[40px]">
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={DigitalOcean} alt="Digital Ocean" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={AWS} alt="AWS" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={MySql} alt="MySql" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={MongoDB} alt="MongoDB" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={PostgreSql} alt="PostgreSql" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Nginx} alt="Nginx" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Php} alt="PHP" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={CloudFlare} alt="Cloud Flare" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Magento} alt="Magento" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Moodle} alt="Moodle" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={WordPress} alt="WordPress" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={SuiteCRM} alt="SuiteCRM" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Drupal} alt="Drupal" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Django} alt="Drupal" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Python} alt="Python" />
                    </div>
                    <div className="inline-block">
                        <img className="w-[100px] md:w-[110px] h-auto mt-[10px] mx-[10px] mb-[20px]" src={Laravel} alt="Laravel" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStackSection;