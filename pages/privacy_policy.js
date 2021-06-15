import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Banner from '../comps/Banner'
import observe_nav from '../comps/observe_nav'
import React, { useState, useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    observe_nav()
  })

  return (
    <div>
      <Head>
        <title>Romeo</title>
        <link rel="icon" href="/favicon.ico" />
        
        
      </Head>

      <Navbar/>

      <section id="hero" className="bg-accent flex justify-center items-end" >
      <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
        <div className=" max-w-screen-lg pl-4 ">
          <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Privacy Policy
</h1>
              
              
            </div>
        </div>
        </section>
        
      </section>


      
      <section className="flex justify-center bg-white py-16">
          <div className="flex max-w-screen-lg  flex-wrap flex-1">
            <div className="flex-1">
              <div className=" pb-8 ">
              <h2 className=" block text-left  text-darkcolor pr-8  font-P22Underground-thp text-4xl font-bold py-4 ">
              Privacy Policy</h2>
              </div>
              <h2 className="">ROMEO POWER, INC. PRIVACY POLICY</h2>
<p className=" text-left  font-P22Underground-book  p-2"><em>Effective Date: December 29, 2020</em></p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>Introduction</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">Romeo Power, Inc. (“Romeo”, ‘we’, ‘us,’ or ‘our’) values your trust and wants you to be familiar with how we collect, use, and disclose information.  This Privacy Policy describes our practices in connection with information that we collect, both online and offline, when you apply for a job through our application-portal, visit and/or create an account on our website (www.romeopower.com) (the “Website”), or through our other interactions with you as a current or potential customer (collectively, the “Services”).</p>
<p className=" text-left  font-P22Underground-book  p-2">By visiting our Website, applying for a job through our application-portal, or otherwise engaging our Services, you agree to the terms and conditions of this Privacy Policy. Our Employee Privacy Policy governs the management of Personal Information of our employees and contractors and shall control in the event of a conflict with this Privacy Policy.</p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>How We May Collect and Use Your Personal Information</strong></p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>Personal Information We May Collect:</em></u></p>
<p className=" text-left  font-P22Underground-book  p-2">&#8220;Personal Information” is information that identifies an individual or relates to an identifiable person.  We may collect the following Personal Information from you when you interact with us, such as when you use our Services (including when you visit our Website), purchase any Romeo products, or submit a job application through our application portal. We may also collect some types of Personal Information through website cookies, which refer to small amounts of data that are sent to your browser from a website and stored on your device, and which may include a unique identifier.</p>
<table border="1">
<tr>
<td className=" text-left  font-P22Underground-book  p-2" width="25%" >Categories of Personal Information</td>
<td className=" text-left  font-P22Underground-book  p-2" width="45%" >Specific Personal Information</td>
<td className=" text-left  font-P22Underground-book  p-2" width="30%" >Sources of Personal Information</td>
</tr>
<tr>
<td className=" text-left  font-P22Underground-book  p-2">Identifiers</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Name (including former and maiden names)</p>
<p className=" text-left  font-P22Underground-book  p-2">Title</p>
<p className=" text-left  font-P22Underground-book  p-2">Mailing Address</p>
<p className=" text-left  font-P22Underground-book  p-2">Phone Number</p>
<p className=" text-left  font-P22Underground-book  p-2">E-mail Address</p>
<p className=" text-left  font-P22Underground-book  p-2">Business/Company Affiliation</p>
<p className=" text-left  font-P22Underground-book  p-2">Account Username and Passwords</p>
<p className=" text-left  font-P22Underground-book  p-2">Employee Identification Number</p>
<p className=" text-left  font-P22Underground-book  p-2">IP Address</p>
</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Contacting Us (via Website, Email, Phone, or by Mail)</p>
<p className=" text-left  font-P22Underground-book  p-2">Employment Applications</p>
<p className=" text-left  font-P22Underground-book  p-2">Account Registrations/ Applications</p>
<p className=" text-left  font-P22Underground-book  p-2">Downloading Information from Our Website</p>
<p className=" text-left  font-P22Underground-book  p-2">Purchases Made on Our Website</p>
</td>
</tr>
<tr>
<td className=" text-left  font-P22Underground-book  p-2">Legally Protected Characteristics</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Gender</p>
<p className=" text-left  font-P22Underground-book  p-2">Disability Status </p>
<p className=" text-left  font-P22Underground-book  p-2">Ethnicity </p>
<p className=" text-left  font-P22Underground-book  p-2">Veteran status</p>
</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Contacting Us (via Website, Email, Phone, or by Mail)</p>
<p className=" text-left  font-P22Underground-book  p-2">Employment Applications</p>
</td>
</tr>
<tr>
<td className=" text-left  font-P22Underground-book  p-2">Commercial Purchasing Information</td>
<td className=" text-left  font-P22Underground-book  p-2">Products or services purchased, obtained, or considered</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Contacting Us (via Website, Email, Phone, or by Mail)</p>
<p className=" text-left  font-P22Underground-book  p-2">Downloading Information from Our Website</p>
<p className=" text-left  font-P22Underground-book  p-2">Purchases Made on Our Website</p>
</td>
</tr>
<tr>
<td className=" text-left  font-P22Underground-book  p-2">Internet Network Activity</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Device Identification Number/Type</p>
<p className=" text-left  font-P22Underground-book  p-2">Webpage Views </p>
<p className=" text-left  font-P22Underground-book  p-2">Websites or Applications You Navigate To or From Our Site</p>
<p className=" text-left  font-P22Underground-book  p-2">Referral URL, Browsing History</p>
</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Mobile Device Interactions</p>
<p className=" text-left  font-P22Underground-book  p-2">Website Cookies</p>
</td>
</tr>
<tr>
<td className=" text-left  font-P22Underground-book  p-2">Education Related Information </td>
<td className=" text-left  font-P22Underground-book  p-2">Your resume, and Information about  the schools you attended, your degree, and discipline</td>
<td className=" text-left  font-P22Underground-book  p-2"><p className=" text-left  font-P22Underground-book  p-2">Contacting Us (via Website, Email, Phone, or by Mail)</p>
<p className=" text-left  font-P22Underground-book  p-2">Employment Applications</p>
</td>
</tr>
</table>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>Information Collected from Job Applicants:</em></u></p>
<p className=" text-left  font-P22Underground-book  p-2">When you apply to a job with Romeo you may provide additional information about your educational and professional background, employment eligibility status, and other personal and/or sensitive information. This Personal Information is used exclusively for the purposes of evaluating your application for employment. </p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>Information from Third Parties: </em></u></p>
<p className=" text-left  font-P22Underground-book  p-2">For customer due diligence purposes, and as permitted by applicable laws, Romeo may also enhance the Personal Information we collect from you with information we obtain from third parties that are entitled to share that information (e.g., information from credit agencies, search information providers, or public sources).</p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>We May Use Personal Information: </em></u></p>
<ul>
<li>To complete and fulfill your purchase, including verifying you identity, provide you with customer service, and respond to your inquiries. </li>
<li>To recognize your device: We may use cookies to recognize your device and provide you with a personalized experience on our websites, or otherwise through our Services. </li>
<li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
<li>For our business purposes, audits, fraud monitoring and prevention, enhancing, improving, or modifying our Services, identifying usage trends, and operating and expanding our business activities.</li>
<li>As we believe to be necessary or appropriate: (a) under applicable law; (b) to comply with legal process and to prevent, detect, or suppress abuse, fraud, or criminal activity; (c) to respond to requests from public and government authorities; (d) to enforce our terms and conditions; (e) to protect our operations, assets, or interests or those of any of our affiliates; (f) to protect our rights, privacy, safety, or property, or that of our affiliates, you, or others; (g) to allow us to pursue available remedies or limit the damages that we may sustain; and (h) in order to comply with our business partner’s brand standards and contractual obligations.</li>
</ul>
<p className=" text-left  font-P22Underground-book  p-2"><strong>How Personal Information May Be Disclosed</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">We do not sell your Personal Information to anyone for any purpose. Romeo will always ask for your consent before sharing your Personal Information with third parties for purposes other than those disclosed in this Privacy Policy.</p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>We May Share Your Information for the Following Reasons:</em></u></p>
<ul>
<li>To prevent, investigate, or take action regarding activity that we may consider to be illegal, unethical, or legally actionable, including suspected fraud; situations involving potential threats to the physical safety of any person; or violations of any other agreement related to our products or Services, or as otherwise required by law.</li>
<li>With our service providers, business partners, or our affiliates when necessary to perform services on our or your behalf, including, for example:
<p className=" text-left  font-P22Underground-book  p-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8211; With our third party service providers, to provide services such as website hosting, data analysis, payment processing, order fulfillment, information technology and related infrastructure, employment application processing, and other similar services.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8211; With other third party business partners to the extent that they are involved in your purchase of our products or your interactions with our Services.</p></li>
<li>In the event of a merger, reorganization, dissolution or similar corporate event, or the sale of all or substantially all of our assets, we expect that the information that we have collected, including personal data, would be transferred to the surviving entity in a merger or the acquiring entity.  All such transfers shall be subject to our commitments with respect to the privacy and confidentiality of such personal data as set forth in our Privacy Policy.</li>
<li>When required by law or other circumstances, including to respond to lawful court orders, subpoenas, warrants, or other requests by public authorities; to meet national security or law enforcement requirements; when we believe in good faith that the law requires it; or to verify or enforce our policies and procedures.</li>
</ul>
<p className=" text-left  font-P22Underground-book  p-2"><strong>How We May Collect and Use Other Information</strong></p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>Other Information We May Collect:</em></u></p>
<p className=" text-left  font-P22Underground-book  p-2">We may also collect data in a form that does not, on its own, permit direct association with any specific individual (&#8220;Non-Personal Information&#8221;). Non-Personal Information may, for example, include network connection information, browser type and language, device information, and some types of information collected by cookies and other technologies. If we are required to treat any such information as Personal Information under applicable law, then we will use it only for the purposes for which we use and disclose Personal Information as detailed in this Privacy Policy.  Similarly, if we combine Non-Personal Information with Personal Information, the combined information will be treated as Personal Information for as long as it remains combined.</p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>How We May Use Non-Personal Information:</em></u></p>
<p className=" text-left  font-P22Underground-book  p-2">We may collect, use, transfer, and disclose Non-Personal information for any purpose, such as:</p>
<ul>
<li>To improve our products and Services.</li>
<li>To aggregate data for marketing, research, and analytical purposes by ourselves or our third party partners.</li>
<li>To assist us in administering the website and our Services.</li>
</ul>
<p className=" text-left  font-P22Underground-book  p-2">Please note that because there is no consistent industry understanding of how to respond to “Do Not Track” signals, we do not alter our data collection and usage practices when we detect such a signal from your browser.</p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>How Long Do We Retain Your Personal Information?</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">In general, we retain your Personal Information unless, and until, you request us to delete it.  We retain your information for various legal and operational purposes, as well as to facilitate ongoing communications after you have purchased one of our products.  Additionally, in order to improve our Services and functionality we retain anonymized or aggregated information about our Website visits.</p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>How We Keep Your Personal Information Safe</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">We seek to use reasonable organizational, technical, and administrative measures to protect Personal Information within our organization.  Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure.  If you have reason to believe that your interaction with us is no longer secure, please immediately notify us in accordance with the &#8220;Contacting Us&#8221; section below.</p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>Additional Privacy Rights for Residents of California</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">The California Consumer Protection Act of 2018 (“CCPA”), provides residents of California with certain privacy rights regarding their Personal Information, including:</p>
<ul>
<li>The right to request information about how we collect, use, and disclose your personal information</li>
<li>The right to access your information.</li>
<li>The right to request that we delete information about you, subject to some exceptions.</li>
</ul>
<p className=" text-left  font-P22Underground-book  p-2">If you choose to exercise your CCPA privacy rights, you will not receive discriminatory treatment or a lesser degree of service from us.</p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>Exercising Your Rights </em></u></p>
<p className=" text-left  font-P22Underground-book  p-2">Residents of California may exercise their respective privacy rights by submitting a request to Romeo by:</p>
<ul>
<li>Calling us at +1-833-467-2237.</li>
<li>Visiting https://romeopower.com/company/ (for access requests only).</li>
<li>Email us at info@romeopower.com</li>
</ul>
<p className=" text-left  font-P22Underground-book  p-2">Only you, or a person that you have appropriately designated by law to act on your behalf, may make a verifiable consumer request related to your Personal Information. You may also make a verifiable consumer request on behalf of your minor child.</p>
<p className=" text-left  font-P22Underground-book  p-2">In order for us to properly verify your request, it must:</p>
<ul>
<li>Provide sufficient information to allow us to reasonably verify that you are the person about whom we collected Personal Information, or a person authorized to act on your behalf; and </li>
<li>Describe your request with sufficient detail to properly understand and respond to it.</li>
</ul>
<p className=" text-left  font-P22Underground-book  p-2">Making a verifiable consumer request does not require you to create an account with us; however, we consider a request made through your password-protected account sufficiently verified when the request relates to Personal Information associated with that specific account. You may only make a verifiable consumer request for access twice within a 12-month period. </p>
<p className=" text-left  font-P22Underground-book  p-2">We will only use the Personal Information that you have provided in a verifiable consumer request in order to verify your request. We cannot respond to your request or provide you with Personal Information if we cannot verify your identity or authority.</p>
<p className=" text-left  font-P22Underground-book  p-2">If you are submitting a verifiable consumer request that we delete any of the Personal Information we have collected and retained about you, your request may be denied if it is necessary for us to retain your information under one or more exceptions as defined by applicable law.</p>
<p className=" text-left  font-P22Underground-book  p-2"><u><em>Response Timing and Format:</em></u></p>
<p className=" text-left  font-P22Underground-book  p-2">We aim to respond to customer requests promptly, and in accordance with applicable law. If we are delayed in responding to verifiable consumer requests, we will inform you of the reason and provide you with an estimated time period for our response. We will deliver a response to your existing account with us, if applicable, or by providing a written response by mail or electronically, at your option. We do not charge a fee for responding to verifiable consumer requests, unless your request is excessive, repetitive, or unfounded.</p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>Cross-Border Data Transfers</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">We operate globally and may transfer your Personal Information to affiliated companies of Romeo or third parties in locations around the world for the purposes described in this Privacy Policy.  By agreeing to this Privacy Policy, you expressly consent to the processing of your data in any jurisdiction, including, without limitation, the United States of America, in accordance with this Privacy Policy and all applicable privacy and data protection laws and regulations, including for the performance of a contract; Standard Contractual Clauses approved by the European Commission; Binding Corporate Rules; and Binding Corporate Processor Rules.</p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>Children</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">The Romeo Services are not directed to children under the age of 13.  We do not knowingly collect, use, or disclose Personal Information from anyone under 13 years of age.  If we become aware that we have unknowingly collected Personal Information from a child under the age of 13, we will make reasonable efforts to delete such information from our records. If a child has provided us with Personal Information, a parent or guardian may also contact us in accordance with the section below titled, “Contact Us” and, upon request, we will make reasonable efforts to delete the child’s information from the database in which it is stored. </p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>Updates to This Privacy Policy </strong></p>
<p className=" text-left  font-P22Underground-book  p-2">We may update this Privacy Policy. The “Effective Date” at the top of this page indicates when this Privacy Policy was last revised.  Any changes will become effective when we post the revised Privacy Policy on the Websites or within other of our Services, as applicable. By continuing to use the Website, the job application web portal, or any other of our Services, as applicable, following these changes, you acknowledge and agree to the terms and conditions set forth in the Privacy Policy as of the Effective Date.</p>
<p className=" text-left  font-P22Underground-book  p-2"><strong>Contact Us</strong></p>
<p className=" text-left  font-P22Underground-book  p-2">If you have any questions about your Personal Information or this policy, or if you would like to submit a complaint about how Romeo processes your Personal Information, please contact us at:</p>
<p className=" text-left  font-P22Underground-book  p-2">compliance@romeopower.com<br />Romeo Power, Inc.<br />4380 Ayers Ave<br />Vernon, CA 90058</p>

             
            </div>
          </div>
          </section>

      







        <Banner />



        <Footer />
        


    </div>
  )
}
