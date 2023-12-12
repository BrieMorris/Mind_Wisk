import React from 'react';
import { Typography, Paper } from '@mui/material';
import CustomizedAccordions from './Accordion.jsx';
function Disclaimer() {
    const disclaimerContainerStyle = {
        padding: '50px',
        maxWidth: '1100px',
        margin: 'auto',
        marginTop: '16px',
        backgroundColor: '#f5f5f5',
    };

    const titleStyle = {
        marginBottom: '12px',
        color: '#356390',
    };

    const secondSectionStyle = {
        marginTop: '24px',
    };

    return (
        <Paper elevation={3} style={disclaimerContainerStyle}>
            <div>
                <Typography variant="h4" style={titleStyle}>
                    Disclaimer, Privacy, and Return Policy
                </Typography>
                <Typography variant="body1">
                    <div>
                        <p>Last updated: December 07, 2023</p>

                        <h3>Interpretation and Definitions</h3>
                        <h4>Interpretation</h4>
                        <p>
                            The words of which the initial letter is capitalized have meanings
                            defined under the following conditions. The following definitions shall
                            have the same meaning regardless of whether they appear in singular or
                            in plural.
                        </p>

                        <h4>Definitions</h4>
                        <p>
                            For the purposes of this Disclaimer:
                            <ul>
                                <li>
                                    <strong>Company</strong> (referred to as either "the Company", "We",
                                    "Us" or "Our" in this Disclaimer) refers to MindWisk.
                                </li>
                                <li>
                                    <strong>Service</strong> refers to the Website.
                                </li>
                                <li>
                                    <strong>You</strong> means the individual accessing the Service, or
                                    the company, or other legal entity on behalf of which such
                                    individual is accessing or using the Service, as applicable.
                                </li>
                                <li>
                                    <strong>Website</strong> refers to MindWisk, accessible from
                                    https://MindWisk.com.
                                </li>
                            </ul>
                        </p>

                        <h3>Disclaimer</h3>
                        <p>
                            The information contained on the Service is for general information
                            purposes only. The Company assumes no responsibility for errors or
                            omissions in the contents of the Service.
                        </p>

                        <p>
                            In no event shall the Company be liable for any special, direct,
                            indirect, consequential, or incidental damages or any damages whatsoever,
                            whether in an action of contract, negligence or other tort, arising out
                            of or in connection with the use of the Service or the contents of the
                            Service. The Company reserves the right to make additions, deletions, or
                            modifications to the contents on the Service at any time without prior
                            notice. This Disclaimer has been created with the help of the Free
                            Disclaimer Generator.
                        </p>

                        <h3>External Links Disclaimer</h3>

                        <p>The Service may contain links to external websites that are not provided or
                            maintained by or in any way affiliated with the Company.</p>

                        <p>
                            Please note that the Company does not guarantee the accuracy, relevance, timeliness,
                            or completeness of any information on these external websites.
                        </p>

                        <h3>Errors and Omissions Disclaimer</h3>

                        <p>
                            The information given by the Service is for general guidance on matters of interest only.
                            Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate,
                            errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays,
                            omissions or inaccuracies in the information contained on the Service.
                        </p>

                        <p>
                            The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
                        </p>

                        <h3>Fair Use Disclaimer</h3>

                        <p>
                            The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.</p>

                        <p>The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
                        </p>

                        <p>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
                        </p>

                        <h3>Views Expressed Disclaimer</h3>

                        <p>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.

                        </p>
                        <p>Comments published by users are their sole responsibility and the users will take full responsibility,
                            liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment.
                            The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
                        </p>

                        <h3>No Responsibility Disclaimer</h3>
                        <p>The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal,
                            accounting, tax, or other professional advice and services.
                            As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</p>

                        <p>In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.</p>

                        <h3>"Use at Your Own Risk" Disclaimer</h3>
                        <p>All information in the Service is provided "as is", with no guarantee of completeness, accuracy,
                            timeliness or of the results obtained from the use of this information, and without warranty of any kind,
                            express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p>

                        <p>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the
                            information given by the Service or for any consequential, special or similar damages,
                            even if advised of the possibility of such damages.</p>

                        <p>
                            This Privacy Policy describes Our policies and procedures on the
                            collection, use, and disclosure of Your information when You use the
                            Service and tells You about Your privacy rights and how the law
                            protects You.
                        </p>

                        <p>
                            We use Your Personal data to provide and improve the Service. By using
                            the Service, You agree to the collection and use of information in
                            accordance with this Privacy Policy. This Privacy Policy has been
                            created with the help of the Free Privacy Policy Generator.
                        </p>

                        <h3>Privacy Policy</h3>

                        <h4>Definitions</h4>
                        <p>
                            For the purposes of this Privacy Policy:
                            <ul>
                                <li>
                                    <strong>Account</strong> means a unique account created for You
                                    to access our Service or parts of our Service.
                                </li>
                                <li>
                                    <strong>Affiliate</strong> means an entity that controls, is
                                    controlled by or is under common control with a party, where
                                    "control" means ownership of 50% or more of the shares, equity
                                    interest or other securities entitled to vote for election of
                                    directors or other managing authority.
                                </li>
                                <li>
                                    <strong>Company</strong> (referred to as either "the Company",
                                    "We", "Us" or "Our" in this Agreement) refers to MindWisk.
                                </li>
                                <li>
                                    <strong>Cookies</strong> are small files that are placed on Your computer,
                                    mobile device or any other device by a website, containing the details of
                                    Your browsing history on that website among its many uses.
                                </li>
                                <li>
                                    <strong>Country</strong> refers to: Minnesota, United States
                                </li>
                                <li>
                                    <strong>Device</strong> means any device that can access the Service such as a computer,
                                    a cellphone or a digital tablet.
                                </li>
                                <li>
                                    <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
                                </li>
                                <li>
                                    <strong>Service</strong> refers to the Website.
                                </li>
                                <li>
                                    <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.
                                    It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service
                                    on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                                </li>
                                <li>
                                    <strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in
                                    or create an account to use the Service.
                                </li>
                                <li>
                                    <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service
                                    infrastructure itself (for example, the duration of a page visit).
                                </li>
                            </ul>
                        </p>

                        <h3>Collecting and Using Your Personal Data</h3>

                        <h4>Types of Data Collected</h4>
                        <p>
                            <strong>Personal Data</strong>
                            <br />
                            While using Our Service, We may ask You to provide Us with certain
                            personally identifiable information that can be used to contact or
                            identify You. Personally identifiable information may include, but is
                            not limited to:
                            <ul>
                                <li>Email address</li>
                                <li>First name and last name</li>
                                <li>Phone number</li>
                                <li>Address, State, Province, ZIP/Postal code, City</li>
                                <li>Usage Data</li>
                            </ul>
                        </p>

                        <h4>Usage Data</h4>
                        <p>
                            Usage Data is collected automatically when using the Service.
                            Usage Data may include information such as Your Device's Internet
                            Protocol address (e.g. IP address), browser type, browser version,
                            the pages of our Service that You visit, the time and date of Your
                            visit, the time spent on those pages, unique device identifiers, and
                            other diagnostic data.
                        </p>
                        <p>
                            When You access the Service by or through a mobile device, We may collect certain
                            information automatically, including, but not limited to, the type of mobile device You use,
                            Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system,
                            the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                        </p>

                        <p>We may also collect information that your browser sends whenever you visit our Service or when
                            You access the Service by or through a mobile device.
                        </p>

                        <h3>Information from Third-Party Social Media Services</h3>

                        <p>
                            The Company allows You to create an account and log in to use the
                            Service through the following Third-party Social Media Services:
                        </p>

                        <ul>
                            <li>Google</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>

                        <p>
                            If You decide to register through or otherwise grant us access to a
                            Third-Party Social Media Service, We may collect Personal data that is
                            already associated with Your Third-Party Social Media Service's
                            account, such as Your name, Your email address, Your activities or
                            Your contact list associated with that account.
                        </p>

                        <p>
                            You may also have the option of sharing additional information with
                            the Company through Your Third-Party Social Media Service's account.
                            If You choose to provide such information and Personal Data, during
                            registration or otherwise, You are giving the Company permission to
                            use, share, and store it in a manner consistent with this Privacy
                            Policy.
                        </p>

                        <h3>Tracking Technologies and Cookies</h3>

                        <p>
                            We use Cookies and similar tracking technologies to track the activity
                            on Our Service and store certain information. Tracking technologies
                            used are beacons, tags, and scripts to collect and track information
                            and to improve and analyze Our Service. The technologies We use may
                            include:
                        </p>

                        <ul>
                            <li>
                                <strong>Cookies or Browser Cookies:</strong> A cookie is a small
                                file placed on Your Device. You can instruct Your browser to refuse
                                all Cookies or to indicate when a Cookie is being sent. However, if
                                You do not accept Cookies, You may not be able to use some parts of
                                our Service. Unless you have adjusted Your browser setting so that
                                it will refuse Cookies, our Service may use Cookies.
                            </li>
                            <li>
                                <strong>Web Beacons:</strong> Certain sections of our Service and
                                our emails may contain small electronic files known as web beacons
                                (also referred to as clear gifs, pixel tags, and single-pixel gifs)
                                that permit the Company, for example, to count users who have
                                visited those pages or opened an email and for other related website
                                statistics (for example, recording the popularity of a certain
                                section and verifying system and server integrity).
                            </li>
                        </ul>

                        <section>
                            <h3>Cookies</h3>
                            <p>
                                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or
                                mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser.
                                Learn more about cookies on the Free Privacy Policy website article.
                            </p>

                            <section>
                                <h3>Necessary / Essential Cookies</h3>
                                <p>Type: Session Cookies</p>
                                <p>Administered by: Us</p>
                                <p>
                                    Purpose: These Cookies are essential to provide you with services available through the Website
                                    and to enable you to use some of its features. They help to authenticate users and prevent fraudulent
                                    use of user accounts. Without these Cookies, the services that you have asked for cannot be provided,
                                    and we only use these Cookies to provide you with those services.
                                </p>
                            </section>

                            <section>
                                <h3>Cookies Policy / Notice Acceptance Cookies </h3>
                                <p>Type: Persistent Cookies</p>
                                <p>Administered by: Us</p>
                                <p>
                                    Purpose: These Cookies identify if users have accepted the use of cookies on the website.</p>
                            </section>

                            <section>
                                <h3>Functionality Cookies </h3>
                                <p>Type: Persistent Cookies</p>
                                <p>Administered by: Us</p>
                                <p>
                                    Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference.
                                    The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                            </section>

                            <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>


                        </section>

                        <section>
                            <h2>Use of Your Personal Data</h2>
                            <p>
                                The Company may use Personal Data for the following purposes:
                            </p>

                            <ul>
                                <li>To provide and maintain our Service, including monitoring the usage of our Service.</li>
                                <li>To manage your account: to manage your registration as a user of the Service.</li>
                                <li>For the performance of a contract: the development, compliance, and undertaking of the purchase contract
                                    for the products, items, or services you have purchased or of any other contract with us through the Service.</li>
                                <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication,
                                    such as a mobile application's push notifications regarding updates or informative communications related to the functionalities,
                                    products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                                <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar
                                    to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                                <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                                <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution,
                                    or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding,
                                    in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                                <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness
                                    of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                            </ul>
                        </section>


                        <section>
                            <p>
                                We may share Your personal information in the following situations:
                            </p>

                            <ul>
                                <li>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
                                </li>
                                <li>For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
                                </li>
                                <li>With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
                                </li>
                                <li>With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
                                </li>
                                <li>With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.
                                </li>
                                <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.
                                </li>
                                <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness
                                    of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                            </ul>
                        </section>
                        <section>
                            <h3>Retention of Your Personal Data</h3>
                            <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                            <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                        </section>
                        <section>
                            <h3>Transfer of Your Personal Data</h3>
                            <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                            <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                            <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                        </section>
                        <section>
                            <h3>Delete Your Personal Data</h3>
                            <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. Our Service may give You the ability to delete certain information about You from within the Service.</p>
                            <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us. Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
                        </section>
                        <section>
                            <h3>Disclosure of Your Personal Data</h3>
                            <h4>Business Transactions</h4>
                            <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                            <h4>Law enforcement</h4>
                            <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                            <h4>Other legal requirements</h4>
                            <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                            <ul>
                                <li>Comply with a legal obligation</li>
                                <li>Protect and defend the rights or property of the Company</li>
                                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                <li>Protect the personal safety of Users of the Service or the public</li>
                                <li>Protect against legal liability</li>
                            </ul>
                        </section>
                        <section>
                            <h3>Security of Your Personal Data</h3>
                            <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                        </section>
                        <section>
                            <h3>Children's Privacy</h3>
                            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                            <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
                        </section>
                        <section>
                            <h3>Links to Other Websites</h3>
                            <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                        </section>
                        <section>
                            <h3>Changes to this Privacy Policy</h3>
                            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                            <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                        </section>

                        <h1>Return and Refund Policy</h1>
                        <p>Last updated: December 07, 2023</p>

                        <p>
                            Thank you for shopping at MindWisk.
                        </p>

                        <p>
                            If, for any reason, You are not completely satisfied with a purchase, We invite You to review our policy on
                            refunds and returns. This Return and Refund Policy has been created with the help of the Free Return and
                            Refund Policy Generator.
                        </p>

                        <h2>Interpretation and Definitions</h2>

                        <h3>Interpretation</h3>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.
                            The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                        </p>

                        <h3>Definitions</h3>
                        <p>
                            For the purposes of this Return and Refund Policy:
                        </p>

                        <ul>
                            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)
                                refers to MindWisk.
                            </li>
                            <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
                            <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
                            <li><strong>Service</strong> refers to the Website.</li>
                            <li><strong>Website</strong> refers to MindWisk, accessible from <a href="https://MindWisk.com">https://MindWisk.com</a></li>
                            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity
                                on behalf of which such individual is accessing or using the Service, as applicable.
                            </li>
                        </ul>
                        <h3>Your Order Refund Rights</h3>

                        <p>
                            You may request a refund for Your Order within 45 days if the items
                            were damaged.
                        </p>

                        <p>
                            The deadline for refunding an Order is 45 days from the date on which
                            You received the Goods or on which a third party you have appointed,
                            who is not the carrier, takes possession of the product delivered.
                        </p>

                        <p>
                            In order to exercise Your right of refund, You must inform Us of your
                            decision by means of a clear statement. You can inform us of your
                            decision by:
                        </p>

                        <ul>
                            <li>
                                <strong>By email:</strong> <a href="mailto:Refunds@MindWisk.com">Refunds@MindWisk.com</a>
                            </li>
                        </ul>

                        <p>
                            We will reimburse You no later than 14 days from the day on which We
                            confirm Your refund. We will use the same means of payment as You used
                            for the Order, and You will not incur any fees for such reimbursement.
                        </p>

                        <h4>Conditions for Refund</h4>

                        <p>
                            In order for the Goods to be eligible for a refund, please make sure
                            that:
                        </p>

                        <ul>
                            <li>The Goods were delivered in the last 45 days</li>
                        </ul>

                        <p>
                            <strong>Individual MindWisks cannot be returned:</strong>
                        </p>

                        <p>
                            MindWisks are not suitable for return due to health protection and
                            hygiene reasons. Please pass them along to a friend, if possible.
                        </p>

                        <p>
                            For bulk orders still sealed in their original packaging, please
                            contact us for special instructions.
                        </p>
                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions about this Disclaimer, You can contact Us:
                            <ul>
                                <li>
                                    <strong>By email:</strong> <a href="mailto: [email protected]">MindWisk@gmail.com</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </Typography>
            </div>

            <div style={secondSectionStyle}>
                <Typography variant="h4" style={titleStyle}>
                    FAQs
                </Typography>
                <CustomizedAccordions />
            </div>
        </Paper>

    );
}

export default Disclaimer;
