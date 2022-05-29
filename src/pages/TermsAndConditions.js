import Title from '../assets/terms-and-conditions-title.png';

const TermsAndConditions = () => {
    return (
        <div className="w-full mt-[100px]">
            <div className="w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-[15px] mx-auto">
                <img className="w-1/2 h-auto" src={Title} alt="Awards" />
                <div className="text-[16px] text-white tracking-normal leading-[28px] my-[50px]">
                    <ol className="list-[decimal] pl-[40px]">
                        <li className="font-[900]">
                            <h2>Terms</h2>
                            <p className="font-[400] mb-4">
                                By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.
                            </p>
                        </li>
                        <li className="font-[900]">
                            <h2>Use License</h2>
                            <ol className="list-[lower-alpha] pl-[40px]">
                                <li>
                                    <p className="font-[400] mb-4">
                                        Permission is granted to temporarily download one copy of the materials (information or software) on the company web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                    </p>
                                    <ol className="list-[lower-roman] pl-[40px]">
                                        <li>
                                            <p className="font-[400] mb-4">
                                                modify or copy the materials;
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-[400] mb-4">
                                                use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-[400] mb-4">
                                                attempt to decompile or reverse engineer any software contained on the company web site;
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-[400] mb-4">
                                                remove any copyright or other proprietary notations from the materials; or
                                            </p>
                                        </li>
                                        <li>
                                            <p className="font-[400] mb-4">
                                                transfer the materials to another person or "mirror" the materials on any other server.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <p className="font-[400] mb-4">
                                        This license shall automatically terminate if you violate any of these restrictions and may be terminated by the company at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li className="font-[900]">
                            <h2>Disclaimer</h2>
                            <ol className="list-[lower-alpha] pl-[40px]">
                                <li>
                                    <p className="font-[400] mb-4">
                                        The materials on the company web site are provided "as is". The company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, the company does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li className="font-[900]">
                            <h2>Limitations</h2>
                            <p className="font-[400] mb-4">
                                In no event shall the company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on the company's Internet site, even if the company or a the company authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                            </p>
                        </li>
                        <li className="font-[900]">
                            <h2>Revisions and Errata</h2>
                            <p className="font-[400] mb-4">
                                The materials appearing on the company's web site could include technical, typographical, or photographic errors. The company does not warrant that any of the materials on its web site are accurate, complete, or current. The company may make changes to the materials contained on its web site at any time without notice. The company does not, however, make any commitment to update the materials.
                            </p>
                        </li>
                        <li className="font-[900]">
                            <h2>Links</h2>
                            <p className="font-[400] mb-4">
                                The company has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the company of the site. Use of any such linked web site is at the user's own risk.
                            </p>
                        </li>
                        <li className="font-[900]">
                            <h2>Site Terms of Use Modifications</h2>
                            <p className="font-[400] mb-4">
                                The company may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions;