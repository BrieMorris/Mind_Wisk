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
                    Disclaimer/Privacy Policy
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
                        <h3>Contact Us</h3>
                        <p>




                            If you have any questions about this Disclaimer, You can contact Us:
                            <ul>
                                <li>
                                    <strong>By email:</strong> <a href="mailto: [email protected]">[email protected]</a>
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
