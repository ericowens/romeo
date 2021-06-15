import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../comps/Footer'
import Banner from '../../comps/Banner'
import observe_nav from '../../comps/observe_nav'
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

      <Navbar />

      <section id="hero" className="hero-media flex justify-center items-end" >
        <section className="flex flex-1  max-w-screen-lg justify-start items-start align-start py-40 ">
          <div className=" max-w-screen-lg pl-4  ">
            <div className="">
              <h1 className="  font-P22Underground-thp text-7xl font-bold">Media Kit</h1>


            </div>
          </div>
        </section>

      </section>







      <section className="flex  bg-white justify-center py-16">

        <div className="flex-1 flex justify-center align-center content-center px-4 flex-col max-w-screen-lg   ">
        <h2 className="  text-left  inline-block     font-P22Underground-thp text-2xl font-bold pt-8 ">Nuvve and Romeo Power Announce Collaboration to Help
Accelerate Vehicle-to-Grid Integration for Battery-Electric
CommercialVehicles</h2>

          <p className=" text-center  p-2 font-P22Underground-book  text-lg ">Global vehicle-to-grid (V2G) technology and battery technology leaders team up to help lower
the cost for commercial BEV fleet operators
            </p>

            <p className=" text-left  p-2 font-P22Underground-book   ">
              <span className="font-bold">SAN DIEGO, Calif. And LOS ANGELES, Calif.</span> – June 2, 2021 – Nuvve Holding Corp. (“Nuvve”)
(Nasdaq: NVVE), a global technology leader accelerating the electrification of transportation through
its proprietary vehicle-to-grid (“V2G”) GIVe™ platform, and Romeo Power, Inc. (“Romeo Power”)
(NYSE: RMO), an energy technology leader delivering advanced electrification solutions for complex
commercial vehicle applications, today announced a collaboration to integrate communication protocols
between Nuvve’s V2G platform and Romeo Power’s battery management system (“BMS”).
This integration of Nuvve’s communication agent with Romeo Power’s BMS should enable Romeo Power
battery systemsto become V2G compatible,regardless of the commercial vehicle platform.Nuvve’s V2G
technology should also allow excess energy from Romeo Power battery packs in parked EVs to be
collected, stored, and shared to optimize grid stability. The platform also uniquely accounts for precise
energy flow on both the vehicle and charging station sides, which is expected to help mitigate battery
degradation.
</p><p className=" text-left  p-2 font-P22Underground-book   ">
Additionally, Romeo Power expects to be able to monitor and measure specific data related to battery
life. Nuvve recently published a paper on the positive impact intelligent energy management has on
battery health. With its proprietary technology, Nuvve’s V2G platform can reduce battery degradation
while increasing access to clean energy and minimizing operating costs.
This collaboration enablesNuvve and Romeo Powerto cooperate in supporting the broad EV ecosystem,
including OEMs, charging station manufacturers and other technology providers to help lower the total
cost of ownership for BEV fleet managers and accelerate the advancement of EV adoption.
The companies expect to share their data with OEM partners, which could lead to more cost-effective
battery warranties. As EV battery prices decline, this is anotherstep in providing innovative solutions to
ease the transition to EVs, making themmore affordable and accessible.
“We are excited to work with an energy technology leader like Romeo Power to continue building an
ecosystem of solutions providers to electrify commercial vehicle fleets,” said Gregory Poilasne, Chairman
and CEO of Nuvve. “Ultimately, we need innovation across the transportation and energy industries to
create a zero-carbon world.”
</p><p className=" text-left  p-2 font-P22Underground-book   ">
“Integrating Nuvve’s V2G technologywith our batterymanagementsystemsis yet another step by Romeo
Power to continue supporting the advancement of electrification in commercial vehicles,” commented
Romeo Power CEO, Lionel Selwood, Jr. “We are committed to working collaboratively with industry
leaders within the battery ecosystem to maximize benefits to our customers as they pursue extended
battery range, safety and reliability.”
</p><p className=" text-center  p-2 font-P22Underground-book   ">
###
</p><p className="font-bold text-left  p-2 font-P22Underground-book   ">
About Nuvve Holding Corp.
</p><p className=" text-left  p-2 font-P22Underground-book   ">
Nuvve Holding Corp. (Nasdaq: NVVE) is accelerating the electrification of transportation through its
proprietary vehicle-to-grid (V2G) technology. Its mission is to lower the cost of electric vehicle
ownership while supporting the integration of renewable energy sources, including solar and wind.
Nuvve’s Grid Integrated Vehicle, GIVe™, platform is refueling the next generation of electric vehicle
fleets through intelligent, bidirectional charging solutions. Since its founding in 2010, Nuvve has
launched successful V2G projects on five continents and is deploying commercial services
worldwide by developing partnerships with utilities, automakers, and electric vehicle fleets. Nuvve
is headquartered in San Diego, California, and can be found online at www.nuvve.com.
</p><p className="font-bold text-left  p-2 font-P22Underground-book   ">About Romeo Power, Inc.
</p><p className=" text-left  p-2 font-P22Underground-book   ">
Founded in 2016 and headquartered in Los Angeles, California, Romeo Power (NYSE: RMO) is an
energy technology leader delivering advanced electrification solutions for complex commercial
vehicle applications. The company’s suite of advanced hardware, combined with its innovative
battery management system, delivers the safety, performance, reliability and configurability its
customers need to succeed. Romeo Power’s 113,000 square-foot manufacturing facility brings its
flexible design and development process inhouse to pack the most energy dense modules on the
market. To keep up with everything Romeo Power, please follow the Company on social
@romeopowerinc or visit https://romeopower.com.
</p><p className=" text-left  p-2 font-P22Underground-book   ">
Nuvve, GIVe and associated logos are among the trademarks of Nuvve and/or its affiliates in the
United States, certain other countries and/or the EU. Any other trademarks or trade names
mentioned are the property of their respective owners.
</p>

<p className=" text-left  p-2 font-P22Underground-book   ">
CONTACTS<br/><br/>
Nuvve Press Contact<br/>
Marc Trahand, EVP Marketing<br/>
marc@nuvve.com<br/>
+1 858-250-9740<br/><br/><br/>
Nuvve Investor Contact<br/><br/>
Lytham Partners<br/>
Robert Blum or Joe Dorame<br/>
nuvve@lythampartners.com<br/>
+1 602-889-9700<br/><br/><br/>
Romeo Power Press Contact<br/>
ICR, Inc.<br/>
RomeoPowerPR@icrinc.com<br/>
Romeo Power Investor Contact<br/>
ICR, Inc.<br/>
RomeoPowerIR@icrinc.com
</p>

<p className=" text-left  p-2 font-P22Underground-book  font-bold">Forward Looking Statements
</p><p className=" text-left  p-2 font-P22Underground-book   ">The information in this press release includes “forward-looking statements” within the meaning of
Section 27A of the Securities Act of 1933, as amended, and Section 21E of the Securities Exchange
Act of 1934, as amended. All statements, other than statements of present or historical fact,
regarding the collaboration with Romeo Power, Nuvve’s strategy, future operations, estimated and
projected financial performance, prospects, plans and objectives are forward-looking statements.
When used in this press release, the words “could,” “should,” “will,” “may,” “believe,” “anticipate,”
“intend,” “estimate,” “expect,” “project,” the negative of such terms and other similar expressions
are intended to identify forward-looking statements, although not all forward-looking statements
contain such identifying words. These forward-looking statements are based on management’s
current expectations and assumptions about future events and are based on currently available
information as to the outcome and timing of future events. Except as otherwise required by
applicable law, Nuvve disclaims any duty to update any forward-looking statements, all of which are
expressly qualified by the statements in this section, to reflect events or circumstances after the
date of this press release. Nuvve cautions you that these forward-looking statements are subject to
numerous risks and uncertainties, most of which are difficult to predict and many of which are 
beyond the control of Nuvve, including the following factors: (i) Nuvve’s dependence on widespread
acceptance and adoption of electric vehicles and increased installation of charging stations; (ii)
Nuvve’s current dependence on sales of charging stations for most of its revenues; (iii) overall
demand for electric vehicle charging and the potential for reduced demand if governmental
rebates, tax credits and other financial incentives are reduced, modified or eliminated or
governmental mandates to increase the use of electric vehicles or decrease the use of vehicles
powered by fossil fuels, either directly or indirectly through mandated limits on carbon emissions,
are reduced, modified or eliminated; (iv) potential adverse effects on Nuvve’s revenue and gross
margins if customers increasingly claim clean energy credits and, as a result, they are no longer
available to be claimed by Nuvve; (v) the effects of competition on Nuvve’s future business; (vi)
risks related to Nuvve’s dependence on its intellectual property and the risk that Nuvve’s
technology could have undetected defects or errors; (vii) changes in applicable laws or regulations;
(viii) the COVID-19 pandemic and its effect directly on Nuvve and the economy generally; (ix) risks
relating to privacy and data protection laws, privacy or data breaches, or the loss of data; and (x)
the possibility that Nuvve may be adversely affected by other economic, business, and/or
competitive factors. Should one or more of the risks or uncertainties described in this press release
materialize or should underlying assumptions prove incorrect, actual results and plans could differ
materially from those expressed in any forward-looking statements. Additional information
concerning these and other factors that may impact the operations and projections discussed
herein can be found in the proxy statement/prospectus filed by Nuvve with the SEC and in the other
reports that Nuvve will file from time to time with the SEC. Nuvve’s SEC filings are available publicly
on the SEC’s website at www.sec.gov.
</p>



        </div>

      </section>








      <Banner />



      <Footer />



    </div>
  )
}
