import { useEffect } from 'react';
import Title from '../assets/privacy-policy-title.png';

const PrivacyPolicy = () => {

    useEffect(() => {
        document.title = "NUWORKS | The Philippines' Leading Innovations Agency"
    }, [])
    
    return (
        <div className="w-full mt-[100px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <img className="w-1/2 h-auto" src={Title} alt="Awards" />
                <div className="text-[16px] text-white tracking-normal leading-[28px] my-[50px]">
                    <p className="font-[400] mb-4">
                        Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.
                    </p>
                    <ul className="list-disc pl-[40px]">
                        <li>
                            <p className="font-[400] mb-4">
                                Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
                            </p>
                        </li>
                        <li>
                            <p className="font-[400] mb-4">
                                We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.
                            </p>
                        </li>
                        <li>
                            <p className="font-[400] mb-4">
                                We will only retain personal information as long as necessary for the fulfillment of those purposes.
                            </p>
                        </li>
                        <li>
                            <p className="font-[400] mb-4">
                                We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.
                            </p>
                        </li>
                        <li>
                            <p className="font-[400] mb-4">
                                Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to- date.
                            </p>
                        </li>
                        <li>
                            <p className="font-[400] mb-4">
                                We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.
                            </p>
                        </li>
                        <li>
                            <p className="font-[400] mb-4">
                                We will make readily available to customers’ information about our policies and practices relating to the management of personal information.
                            </p>
                        </li>
                    </ul>
                    <p className="font-[400] mb-4">
                        We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;